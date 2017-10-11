import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContributionsComponent } from './components/contributions/contributions.component';
import { ThemesComponent } from './components/contributions/themes/themes.component';
import { VideosComponent } from './components/contributions/videos/videos.component';
import { BooksComponent } from './components/contributions/books/books.component';
import { AboutComponent } from './components/about/about.component'
//services
import { InformacionService } from './services/informacion.service';
import { ContributionsService } from './services/contributions.service';
//rutas
import { ROUTING } from './app.routing';
import { DetailThemeComponent } from './components/detail-theme/detail-theme.component';
import { VideoPipePipe } from './pipes/video-pipe.pipe';
 import { ExamComponent } from './components/contributions/exam/exam.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContributionsComponent,
    ThemesComponent,
    VideosComponent,
    BooksComponent,
    AboutComponent,
    DetailThemeComponent,
    VideoPipePipe,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [InformacionService, ContributionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
