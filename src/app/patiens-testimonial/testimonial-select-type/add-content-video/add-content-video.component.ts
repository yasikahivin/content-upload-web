import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-add-content-video',
  templateUrl: './add-content-video.component.html',
  styleUrls: ['./add-content-video.component.scss'],
})
export class AddContentVideoComponent implements OnInit {
  
  constructor() {}

  videoRef: any;
  videoPrev: any;
  downloadButton:any;


  ngOnInit(): void {
    this.videoRef = document.getElementById('camVideo');
    this.downloadButton = document.getElementById('downloadButton');
    this.videoPrev= document.getElementById('PrevVideo')
    console.log(this.videoRef);
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

  async startRecordingVideo(stream: any) {
    let recorder = new MediaRecorder(stream);
    let data: any[] = [];

    recorder.ondataavailable = (event) => data.push(event.data);
    recorder.start();
    //log(recorder.state + ' for ' + lengthInMS / 1000 + ' seconds...');

    // let stopped = new Promise((resolve) => {
    //   recorder.onstop = resolve;
    //   //recorder.onerror = (event) => reject(event.name);
    // });

    //let recorded =  recorder.state == this.videoPrev && recorder.stop();
    //let recorded = 'recording' && recorder.stop();

    
    console.log(data);
    return data;
    // return Promise.all([
    //   recorded,
    //   stopped
    // ])
    // .then(() => data);
  }

  stop(stream:any ) {
    stream.forEach((track: any) => track.stop());
  }

  startButton() {
    console.log('start button clicked');
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      this.videoRef.srcObject = stream;
      this.downloadButton.href = stream;
      console.log(this.downloadButton.href);
      this.videoRef.captureStream = this.videoRef.captureStream || this.videoRef.mozCaptureStream;
      return new Promise(resolve => this.videoRef.onplaying = resolve);

    }).then(() => this.startRecordingVideo(this.videoRef.captureStream()))
    .then (recordedChunks => {
      let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
      this.videoPrev.src = URL.createObjectURL(recordedBlob);
     
      this.downloadButton.href = this.videoPrev.src;
      this.downloadButton.download = "RecordedVideo.webm";
  
      
    });
  }

  stopButton(){
    console.log('stop button clicked');
    this.videoRef.srcObject.stop();
  }

}



