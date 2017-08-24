import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  public date: number;


  constructor( public infoSer: InformacionService ) {

    this.date = new Date().getFullYear();
 
   }

  ngOnInit() {
  }

}
