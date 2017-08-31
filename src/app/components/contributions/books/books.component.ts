import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'
import { ContributionsService } from '../../../services/contributions.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: []
})
export class BooksComponent implements OnInit {
// public urlImage:string;
  constructor(private _sanitizer:DomSanitizer, public _contributionsS:ContributionsService) {  
    // this.urlImage = "assets/img/project-2.jpg"   ;
  }

  ngOnInit() {
    this._contributionsS.getBooks();
  }


  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
