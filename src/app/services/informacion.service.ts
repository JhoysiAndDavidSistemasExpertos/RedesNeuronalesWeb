import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  public info:any = [];
  public equipo:any = [];
  public cargadainfo:boolean = false;
  public cargadaSobreNosotros:boolean = false;

  constructor(private http:Http) { 
    this.getInfo();
    this.getSobreNosotros();
  }


  public getInfo(){
    this.http.get("assets/data/info.pagina.json").subscribe( 
      (data) =>{
        this.cargadainfo = true;
        this.info = data.json();
      }
    );
  }
  public getSobreNosotros(){
    this.http.get("https://paginawebportafolio-4ceec.firebaseio.com/equipo.json").subscribe( 
      (data) =>{
        this.cargadaSobreNosotros = true;
        this.equipo = data.json();
      }
    );
  }

}
