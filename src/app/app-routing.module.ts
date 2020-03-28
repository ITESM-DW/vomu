import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './vomu/landing/landing.component';
import { LoginComponent } from './vomu/login/login.component';
import { AuthGuard } from './auth-guard.service';
import { ProfileComponent } from './vomu/profile/profile.component';
import { QualityComponent } from './vomu/quality/quality.component';
import { WriteComponent } from './vomu/write/write.component';
import { FeedComponent } from './vomu/feed/feed.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'quality', component: QualityComponent },
  { path: 'write', component: WriteComponent },
  { path: 'feed', component: FeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
