import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public infoS:InformacionService) { }

  ngOnInit() {
  }

}
