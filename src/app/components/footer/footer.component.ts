import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  public date: number;
  public email: string;

  constructor() {

    this.date = new Date().getFullYear();
    this.email = 'davidgjordancbba@gmail.com';
   }

  ngOnInit() {
  }

}
