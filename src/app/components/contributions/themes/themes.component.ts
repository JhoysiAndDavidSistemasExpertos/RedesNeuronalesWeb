import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styles: []
})
export class ThemesComponent implements OnInit {
  public urlImage:string;
  constructor(private _sanitizer:DomSanitizer) {  
    this.urlImage = "assets/img/project-2.jpg"   ;
  }

  ngOnInit() {
    
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
