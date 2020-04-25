import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileInputComponent } from './components/profile-input/profile-input.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedComponent } from './pages/feed/feed.component';
import { QualityComponent } from './pages/quality/quality.component';
import { ApprovalComponent } from './pages/approval/approval.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    ItemlistComponent,
    JumbotronComponent,
    NavbarComponent,
    LoginComponent,
    ProfileInfoComponent,
    ProfileInputComponent,
    ProfileComponent,
    FeedComponent,
    QualityComponent,
    ApprovalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
