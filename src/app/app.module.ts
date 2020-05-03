import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { HeaderComponent } from './components/header/header.component';

import { CourseViewVideoComponent } from './components/course-view-video/course-view-video.component';
import { CourseViewDetailsComponent } from './components/course-view-details/course-view-details.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { SubjectComponent } from './components/create-course/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RibbonComponent,
    FootbarComponent,
    HeaderComponent,
    CourseViewVideoComponent,
    CourseViewDetailsComponent,
    GenericCardComponent,
    CardViewComponent,
    CreateCourseComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
