import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContributionsService {

    themes:any[]=[];

    constructor(private http:Http) { 
        this.getSobreNosotros();
    }

    public getSobreNosotros(){
        this.http.get("https://redesneuroalesweb.firebaseio.com/themes.json").subscribe( 
          (data) =>{
            this.themes = data.json();
            console.log(data.json());
          }
        );
      }
}