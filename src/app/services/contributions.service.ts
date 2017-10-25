import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContributionsService {

  public themes: any[];
  public books: any[];
  public book: any;
  public tests: any[];
  public test:any;

  constructor(private http: Http) {

    this.getThemes();

  }

  public getThemes() {
    this.http.get("https://redesneuroalesweb.firebaseio.com/themes.json").subscribe(
      (data) => {
        this.themes = data.json();
        console.log(data.json());
      }
    );
  }


  public getBooks() {
    this.http.get("https://redesneuroalesweb.firebaseio.com/books.json").subscribe(
      (data) => {
        this.books = data.json();
        console.log("data.Books");
        console.log(data.json());
      }
    );
  }

  public getBook(idBook: number) {

    this.http.get(`https://redesneuroalesweb.firebaseio.com/books/${idBook}.json`).subscribe(
      (data) => {
        this.book = data.json();
        console.log("data.Book");
        console.log(data.json());
      }
    );
  }

  public getTests() {
    this.http.get("https://redesneuroalesweb.firebaseio.com/exams.json").subscribe(
      (data) => {
        this.tests = data.json();
        console.log("data tests");
        console.log(this.tests);
      }
    );
  }


  public getTest(idTest: number) {
    this.http.get(`https://redesneuroalesweb.firebaseio.com/exams/${idTest}.json`).subscribe(
      (data) =>{
        this.test = data.json();
        console.log("data test unico");
        console.log(this.test);
      }
    );
  }
}
