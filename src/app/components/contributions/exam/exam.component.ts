import { Component, OnInit } from '@angular/core';
import { ContributionsService } from '../../../services/contributions.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html'
})
export class ExamComponent implements OnInit {

  public exam:any;
  public titleText:string="TEST";
  public aprobaste:boolean= false;
  
  constructor( public _contributionsService: ContributionsService) { 
    console.log(_contributionsService.tests);
  }

  ngOnInit() {
  }
  public loadExam(test:string){
    this.titleText = test;
  }
  /* loadExam(indice:number){

  } */
  
}
