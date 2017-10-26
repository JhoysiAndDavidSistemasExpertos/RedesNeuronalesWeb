import { count } from 'rxjs/operator/count';
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


  public listTestsDav: any[];
  public testDav: any;
  public listQuestions: any[];
  public listRespuestasSeleccionadas: number[] = [-1, -1, -1, -1, -1];
  public listaRespuestasCorrectas: number[] = [-2, -2, -2, -2, -2];
  public messageNota:string;

  constructor(public _contributionsService: ContributionsService) { }
  ngOnInit() {
    this._contributionsService.getTestsDav().subscribe((data) => {
      this.listTestsDav = data.json();
      console.log("this.listTestsDav");
      console.log(this.listTestsDav);
    });
  }
  public loadExamDav(index: number) {
    this.titleText = "Cargando . . .";
    if (this.listTestsDav) {
      this.testDav = this.listTestsDav[index];
      this.titleText = this.listTestsDav[index].title;
      this.listQuestions = this.testDav.questions;
      this.showTest = true;

      for (let i = 0; i < this.listQuestions.length; i++) {

        this.listaRespuestasCorrectas[i] = this.listQuestions[i].answers.successful;
      }
    }
  }



  ///////Dede aqui estoy intentando  tampoco da mandando el valor de la linea 529 en el html donde esta el clicks
  public checkAnswers(numeroPregunta: number, indexOption: number) {

    this.listRespuestasSeleccionadas[numeroPregunta] = indexOption;;

  }
  public getCalificacion() {
    console.log("RESPUESTAS SELECCIONADAS");

    for (let i = 0; i < this.listRespuestasSeleccionadas.length; i++) {

      console.log(this.listRespuestasSeleccionadas[i]);
    }

    console.log("RESPUESTAS CORRECTAS");

    for (let i = 0; i < this.listaRespuestasCorrectas.length; i++) {

      console.log(this.listaRespuestasCorrectas[i]);
    }

    let count = 0;
    for (let i = 0; i < this.listaRespuestasCorrectas.length; i++) {
      if (this.listRespuestasSeleccionadas[i] == this.listaRespuestasCorrectas[i]) {
        count++;
      }
    }
    console.log("COUNT");    
    console.log(count);
    count = count*20;
    if(count<60){
      this.messageNota = "REPROBASTE TU NOTA ES: "+count;
    }else{
      this.messageNota = "APROBASTE TU NOTA ES: "+count;
    }

  }
}
