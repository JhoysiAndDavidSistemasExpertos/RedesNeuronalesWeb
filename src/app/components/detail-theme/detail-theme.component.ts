import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformacionService } from '../../services/informacion.service';
import { ContributionsService } from '../../services/contributions.service';
import { DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-detail-theme',
  templateUrl: './detail-theme.component.html',
  styles: []
})
export class DetailThemeComponent implements OnInit {
  public article: any;
  public url: string;
  
  constructor(private activaR: ActivatedRoute, public infoSer: InformacionService, public _contributionsS: ContributionsService,private _sanitizer:DomSanitizer) { 
    this.url = 'https://www.youtube.com/embed/';
    
  }

  ngOnInit() {
    
    this.activaR.params.forEach(param => {
      //recivimos los dos parametros
      console.log(param['idTheme']);
      console.log(param['idArticle']);
      let idTheme: number = param['idTheme'];
      let idArticle: number = param['idArticle'];
      this.article = this._contributionsS.themes[idTheme].articles[idArticle];
      console.log("param['idArticle']");
      console.log(this.article);
      this._contributionsS.getBook(this.article.book.urlBook);
    });
  }
  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
}
