import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CourseViewVideoComponent } from './components/course-view-video/course-view-video.component';
import { CourseViewDetailsComponent } from './components/course-view-details/course-view-details.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardViewComponent } from './components/card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseViewVideoComponent,
    CourseViewDetailsComponent,
    GenericCardComponent,
    CardViewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
