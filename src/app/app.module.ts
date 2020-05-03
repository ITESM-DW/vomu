import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileDescriptionComponent } from './components/user-profile-description/user-profile-description.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserProfileDescriptionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
