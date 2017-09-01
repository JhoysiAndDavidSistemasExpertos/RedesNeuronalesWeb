import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../../services/contributions.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styles: []
})
export class VideosComponent implements OnInit {

  public video: string;
  public url: string;

  constructor( public _contriSer: ContributionsService) {
    this.video = 'JSpQHItnrSs';
    this.url = 'https://www.youtube.com/embed/';
   }

  ngOnInit() {
  }

}
