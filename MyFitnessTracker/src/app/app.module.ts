import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MotivationComponent } from './components/motivation/motivation.component';
import { AdviceComponent } from './components/advice/advice.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExerciseLogComponent } from './components/exercise-log/exercise-log.component';
import { HomeComponent } from './components/home/home.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { Router } from '@angular/router';
import { AuthguardGuard } from './guard/authguard.guard';
import { UserService } from './services/user-service/user.service';


import { DataService } from './services/data-service/data.service';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
 { 
   path:'',
   component:SignInComponent,
 },
 { 
   path:'home',
   canActivate: [AuthguardGuard],
   component: HomeComponent
 },
 { 
   path:'exercise',
   canActivate: [AuthguardGuard],
   component:ExerciseLogComponent
 },
 { 
   path:'motivation',
   canActivate: [AuthguardGuard], 
   component:MotivationComponent
   
 },
 { 
   path:'advice',
   canActivate: [AuthguardGuard],
   component:AdviceComponent
 },
 { 
   path:'tutorials', 
   canActivate: [AuthguardGuard],
   component:TutorialsComponent
 },
 { 
  path:'register',
  component:RegisterComponent
 }

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MotivationComponent,
    AdviceComponent,
    FooterComponent,
    ExerciseLogComponent,
    HomeComponent,
    TutorialsComponent,
    SignInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [DataService, UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
