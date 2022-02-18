import { FirstYearComponent } from './Pages/dashboard/practical-session/first-year/first-year.component';
import { PracticalSessionComponent } from './Pages/dashboard/practical-session/practical-session.component';
import { LiveLinksComponent } from './Pages/live-links/live-links.component';
import { SubjectComponent } from './Pages/subject/subject.component';
import { MasterclassesComponent } from './Pages/dashboard/masterclasses/masterclasses.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path :"dashboard",component:DashboardComponent},
  {path :"masterclass",component:MasterclassesComponent},
  {path :"masterclass",component:MasterclassesComponent},
  {path :"practical-session",component:PracticalSessionComponent},
  {path :"first-year",component:FirstYearComponent},


  {path :"subject",component:SubjectComponent},
  {path :"live-links",component:LiveLinksComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
