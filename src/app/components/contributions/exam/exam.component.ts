import { forkJoin } from 'rxjs/observable/forkJoin';
import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../../services/contributions.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html'
})
export class ExamComponent implements OnInit {

  public exam: any;
  public titleText: string = "TEST";
  public aprobaste: boolean = false;
  public showTest: boolean = false;
  public listOptions: any[];
  public listOptionsTotal: any[] =[];
  public listTitleQuestion: string[] = [];
  public titulo:string = "";


  constructor(public _contributionsService: ContributionsService) {
  }

  ngOnInit() {
    /*if (this._contributionsService.tests == undefined) {

      this._contributionsService.getTests();
      this.listTest = this._contributionsService.tests;

    }*/
  }
  public loadExam(index: number) {
    this._contributionsService.getTest(index);
    this._contributionsService.getTests();
    this.titleText = "CARGANDO...";
    this.listTitleQuestion = [];
    this.listOptionsTotal= [];
    this.listOptions = [];
    this.showTest =  false;

    setTimeout(() => {

      for (let ind = 0; ind < 5; ind++) {

        //Obtenemos las respuestas de las opciones de cada pregunta
        this.listOptions = this._contributionsService.tests[index].questions[ind].answers.options;
        this.listOptionsTotal.push(this.listOptions);
        this.listOptions = [];

        //obtenemos el titulo de cada pregunta
        this.titulo = this._contributionsService.test.questions[ind].title;
        this.listTitleQuestion.push(this.titulo);
        this.titulo = "";
      }

      console.log(this.listTitleQuestion);
      console.log(this.listOptionsTotal);
      this.titleText = this._contributionsService.test.title;
      this.showTest = true;


    }, 1000);



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
