import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styles: []
})
export class ExamComponent implements OnInit {

  public exam:any;
  public titleText:string="TEST";
  public aprobaste:boolean= false;
  
  constructor() { }

  ngOnInit() {
  }
  public loadExam(test:string){
    this.titleText = test;
  }
  /* loadExam(indice:number){

  } */
  
}
