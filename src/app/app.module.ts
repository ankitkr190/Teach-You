import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MasterclassesComponent } from './Pages/live-session/masterclasses/masterclasses.component';
import { LiveSessionComponent } from './Pages/live-session/live-session.component';
import { SubjectComponent } from './Pages/subject/subject.component';
import { NotesComponent } from './Pages/notes/notes.component';
import { LiveLinksComponent } from './Pages/live-links/live-links.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    MasterclassesComponent,
    LiveSessionComponent,
    SubjectComponent,
    NotesComponent,
    LiveLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
