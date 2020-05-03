import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileDescriptionComponent } from './components/user-profile-description/user-profile-description.component';
import { UserProfileEditComponent } from './components/user-profile-edit/user-profile-edit.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardViewComponent } from './components/card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserProfileDescriptionComponent,
    UserProfileEditComponent,
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
