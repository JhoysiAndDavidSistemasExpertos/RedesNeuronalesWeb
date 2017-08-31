import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../services/contributions.service';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styles: []
})
export class ContributionsComponent implements OnInit {

  constructor( public contriSer:ContributionsService) {

   }

  ngOnInit() {
  }

}
