import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-add-content-video',
  templateUrl: './add-content-video.component.html',
  styleUrls: ['./add-content-video.component.scss'],
})
export class AddContentVideoComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {
  }

  videoRef: any;
  videoPrev: any;
  downloadButton: any;
  prevURL: any;

  ngOnInit(): void {
    //this.videoRef = document.getElementById('camVideo');
    this.downloadButton = document.getElementById('downloadButton');
    //this.videoPrev = document.getElementById('PrevVideo');
    //console.log(this.videoRef);
    //this.setupCamera();
  }

  // setupCamera() {
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: { width: 300, height: 250 },
  //       audio: true,
  //     })
  //     .then((stream) => {
  //       console.log(stream);
  //       this.videoRef.srcObject = stream;
  //     });
  // }

  // async startRecordingVideo(stream: any) {
  //   let recorder = new MediaRecorder(stream);
  //   let data: any[] = [];

  //   recorder.ondataavailable = (event) => data.push(event.data);
  //   recorder.start();
  //   //log(recorder.state + ' for ' + lengthInMS / 1000 + ' seconds...');

  //   // let stopped = new Promise((resolve) => {
  //   //   recorder.onstop = resolve;
  //   //   //recorder.onerror = (event) => reject(event.name);
  //   // });

  //   //let recorded =  recorder.state == this.videoPrev && recorder.stop();
  //   //let recorded = 'recording' && recorder.stop();

  //   console.log(data);
  //   return data;
  //   // return Promise.all([
  //   //   recorded,
  //   //   stopped
  //   // ])
  //   // .then(() => data);
  // }

  // stop(stream:any ) {
  //   stream.forEach((track: any) => track.stop());
  // }

  // startButton() {
  //   console.log('start button clicked');
  //   navigator.mediaDevices.getUserMedia({
  //     video: true,
  //     audio: true
  //   }).then(stream => {
  //     this.videoRef.srcObject = stream;
  //     this.downloadButton.href = stream;
  //     console.log(this.downloadButton.href);
  //     this.videoRef.captureStream = this.videoRef.captureStream || this.videoRef.mozCaptureStream;
  //     return new Observable(resolve => this.videoRef.onplaying = resolve);

  //   }).then(() => this.startRecordingVideo(this.videoRef.captureStream()))
  //   .then (recordedChunks => {
  //     let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
  //     this.videoPrev.src = URL.createObjectURL(recordedBlob);

  //     this.downloadButton.href = this.videoPrev.src;
  //     this.downloadButton.download = "RecordedVideo.webm";

  //   });
  // }

  // stopButton(){
  //   console.log('stop button clicked');
  //   this.videoRef.srcObject.stop();
  // }

  theStream: any;
  theRecorder: any;
  recordedChunks: any=[];

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
    console.log("rec");
    let recorder;
    this.theStream = stream;
    this.videoRef = document.getElementById('camVideo');
    //var video = document.querySelector('video');
    this.videoRef.srcObject = stream;
    try {
      console.log("rec2");
      recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      
    } catch (e) {
      console.error('Exception while creating MediaRecorder: ' + e);
      return;
    }

    this.theRecorder = recorder;
    console.log("rec3");
    recorder.ondataavailable = (stream) => {
      this.recordedChunks.push(stream);
      console.log("rec4");
    };
    recorder.start(100);
  }

  playButton(){
    console.log("play button clicked");
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
    this.prevURL=this.sanitizer.bypassSecurityTrustUrl(url);
    var a = document.createElement('a');
    //document.body.appendChild(a);
    //a.style = "display: none";
    a.href = this.prevURL;
    a.download = 'test.webm';
    
    a.click();
    // setTimeout() here is needed for Firefox.
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 100);
  }
}
