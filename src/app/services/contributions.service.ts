import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContributionsService {

    public themes:any[];
    public books:any[];

    constructor(private http:Http) { 
        this.getThemes();
    }

    public getThemes(){
        this.http.get("https://redesneuroalesweb.firebaseio.com/themes.json").subscribe( 
          (data) =>{
            this.themes = data.json();
            console.log(data.json());
          }
        );
      }


      public getBooks(){
        this.http.get("https://redesneuroalesweb.firebaseio.com/books.json").subscribe( 
          (data) =>{
            this.books = data.json();
            console.log(data.json());
          }
        );
      }
}