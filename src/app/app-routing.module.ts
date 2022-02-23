import { PracticalSessionComponent } from './Pages/dashboard/practical-session/practical-session.component';
import { LiveLinksComponent } from './Pages/live-links/live-links.component';
import { SubjectComponent } from './Pages/subject/subject.component';
import { MasterclassesComponent } from './Pages/dashboard/masterclasses/masterclasses.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

  // Practical session routes

import { FirstYearComponent } from './Pages/dashboard/practical-session/first-year/first-year.component';
import { SecondYearComponent } from './Pages/dashboard/practical-session/second-year/second-year.component';
import { ThirdYearComponent } from './Pages/dashboard/practical-session/third-year/third-year.component';
import { FourthYearComponent } from './Pages/dashboard/practical-session/fourth-year/fourth-year.component';

  // Masterclasses routes


import { FirstyearMasterclassComponent } from './Pages/dashboard/masterclasses/firstyear-masterclass/firstyear-masterclass.component';
import { SecondyearMasterclassComponent } from './Pages/dashboard/masterclasses/secondyear-masterclass/secondyear-masterclass.component';
import { ThirdyearMasterclassComponent } from './Pages/dashboard/masterclasses/thirdyear-masterclass/thirdyear-masterclass.component';
import { FourthyearMasterclassComponent } from './Pages/dashboard/masterclasses/fourthyear-masterclass/fourthyear-masterclass.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path :"dashboard",component:DashboardComponent},

  // Practical session routes

  {path :"practical-session",component:PracticalSessionComponent},
  {path :"firstyear-practical-session",component:FirstYearComponent},
  {path :"secondyear-practical-session",component:SecondYearComponent},
  {path :"thirdyear-practical-session",component:ThirdYearComponent},
  {path :"fourthyear-practical-session",component:FourthYearComponent},

  // Masterclasses routes

  {path :"masterclass",component:MasterclassesComponent},
  {path:"firstyear-masterclass",component:FirstyearMasterclassComponent},
  {path:"secondyear-masterclass",component:SecondyearMasterclassComponent},
  {path:"thirdyear-masterclass",component:ThirdyearMasterclassComponent},
  {path:"fourthyear-masterclass",component:FourthyearMasterclassComponent},










  {path :"subject",component:SubjectComponent},
  {path :"live-links",component:LiveLinksComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
