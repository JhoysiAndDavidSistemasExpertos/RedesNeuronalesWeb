import { forkJoin } from 'rxjs/observable/forkJoin';
import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../../services/contributions.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html'
})
export class ExamComponent implements OnInit {

  public titleText: string = "TEST";
  public showTest: boolean = false;


  public listTestsDav: any [] ;
  public testDav :any ;
  public listQuestions:any [];


  constructor(public _contributionsService: ContributionsService) {
    
  }

  ngOnInit() {
    this._contributionsService.getTestsDav().subscribe( (data) =>{
      this.listTestsDav = data.json();
      console.log("this.listTestsDav");
      console.log(this.listTestsDav);
    });
  }



public loadExamDav(index:number){
  this.titleText = "Cargando . . .";
  if(this.listTestsDav){
    this.testDav = this.listTestsDav[index];
    this.titleText = this.listTestsDav[index].title;
    this.listQuestions = this.testDav.questions;
    this.showTest = true;
  }
}

  

  ///////Dede aqui estoy intentando  tampoco da mandando el valor de la linea 529 en el html donde esta el clicks
  public checkAnswers(value: any) {
    
    ///este codigo encontre pero no da
    
    let resultado:any ="ninguno";
    
    let valorRadioButon:any = document.getElementsByName("radio-stacked1");
    console.log(valorRadioButon);
    // Recorremos todos los valores del radio button para encontrar el
           // seleccionado
           for(var i=0;i<valorRadioButon.length;i++)
           {
               if(valorRadioButon[i].checkAnswers){
                console.log(valorRadioButon[i]);
                 resultado=valorRadioButon[i].value;
               }
           }

    console.log(resultado);
    
  }

}
