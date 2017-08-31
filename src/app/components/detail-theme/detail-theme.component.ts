import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-detail-theme',
  templateUrl: './detail-theme.component.html',
  styles: []
})
export class DetailThemeComponent implements OnInit {

  constructor(private activaR:ActivatedRoute, public infoSer:InformacionService) { }

  ngOnInit() {
    this.activaR.params.forEach( param =>{
      console.log(param);
      console.log(param['id']);
    } );
  }

}
