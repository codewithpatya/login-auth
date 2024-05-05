import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth.guard';
import { FeedbackComponent } from './feedback/feedback/feedback.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent,canActivate:[AuthGuard]},
  {path:'feedback',component:FeedbackComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
