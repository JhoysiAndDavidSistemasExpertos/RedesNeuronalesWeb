import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'
import { InformacionService } from '../../../services/informacion.service';
import { ContributionsService } from '../../../services/contributions.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html'
})
export class ThemesComponent implements OnInit {
  public urlImage:string;

  
  constructor(private _sanitizer:DomSanitizer, public _contriSer: ContributionsService) {  
    this.urlImage = "assets/img/project-2.jpg";
  }

  ngOnInit() {
    
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }



}
