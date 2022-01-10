import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-add-content-video',
  templateUrl: './add-content-video.component.html',
  styleUrls: ['./add-content-video.component.scss'],
})
export class AddContentVideoComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  videoRef: any;
  videoPrev: any;
  downloadButton: any;
  prevURL: any;
  theStream: any;
  theRecorder: any;
  recordedChunks: any = [];
  isShow = true;
  isHide = false;

  ngOnInit(): void {}

  startButton() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        this.gotMedia(stream);
      })
      .catch((e) => {
        console.error('getUserMedia() failed: ' + e);
      });
  }

  gotMedia(stream: any) {
    let recorder;
    this.theStream = stream;
    this.videoRef = document.getElementById('camVideo');
    //var video = document.querySelector('video');
    this.videoRef.srcObject = stream;
    try {
      recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    } catch (e) {
      console.error('Exception while creating MediaRecorder: ' + e);
      return;
    }
    
    this.theRecorder = recorder;
    recorder.ondataavailable = (str) => {
      this.recordedChunks.push(str.data);
      console.log('chunk');
    };
    recorder.start(100);
  }

  playButton() {
    console.log('play button clicked');
    this.theRecorder.start();
  }

  stopButton() {
    this.theRecorder.stop();
    this.theStream.getTracks().forEach((track: { stop: () => void }) => {
      track.stop();
    });

    var blob = new Blob(this.recordedChunks, { type: 'video/webm' });
    console.log(blob);
    
    var url = URL.createObjectURL(blob);
    console.log(url);
    this.prevURL = this.sanitizer.bypassSecurityTrustUrl(url);
    var a = document.createElement('a');
    //document.body.appendChild(a);
    //a.style = "display: none";
    a.href = url;
    a.download = 'test.webm';
    this.isShow = !this.isShow;
    this.isHide = !this.isHide;
    a.click();
    // setTimeout() here is needed for Firefox.
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 100);
  }

  uploadButton(){
    
  }
}

