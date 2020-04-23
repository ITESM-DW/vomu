import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CardComponent } from './components/card/card.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import { ApprovalComponent } from './pages/approval/approval.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileInputComponent } from './components/profile-input/profile-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootbarComponent,
    CarouselComponent,
    JumbotronComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    FeedComponent,
    QualityComponent,
    ItemlistComponent,
    ApprovalComponent,
    ProfileInfoComponent,
    ProfileComponent,
    ProfileInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
