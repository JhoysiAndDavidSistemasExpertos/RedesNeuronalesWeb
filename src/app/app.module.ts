import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContributionsComponent } from './components/contributions/contributions.component';
import { ThemesComponent } from './components/contributions/themes/themes.component';
import { VideosComponent } from './components/contributions/videos/videos.component';
import { BooksComponent } from './components/contributions/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContributionsComponent,
    ThemesComponent,
    VideosComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
