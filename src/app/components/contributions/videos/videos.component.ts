import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styles: []
})
export class VideosComponent implements OnInit {

  public video: string;
  public url: string;

  constructor() {
    console.log("video");
    this.video = 'JSpQHItnrSs';
    this.url = 'https://www.youtube.com/embed/';
   }

  ngOnInit() {
  }

}
