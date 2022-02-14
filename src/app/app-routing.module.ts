import { LiveLinksComponent } from './Pages/live-links/live-links.component';
import { SubjectComponent } from './Pages/subject/subject.component';
import { LiveSessionComponent } from './Pages/live-session/live-session.component';
import { MasterclassesComponent } from './Pages/live-session/masterclasses/masterclasses.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './Pages/notes/notes.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path :"dashboard",component:DashboardComponent},
  {path :"masterclass",component:MasterclassesComponent},
  {path :"livesession",component:LiveSessionComponent},
  {path :"subject",component:SubjectComponent},
  {path :"notes",component:NotesComponent},
  {path :"live-links",component:LiveLinksComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
