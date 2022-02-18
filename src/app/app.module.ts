import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { MasterclassesComponent } from './Pages/dashboard/masterclasses/masterclasses.component';
import { SubjectComponent } from './Pages/subject/subject.component';
import { LiveLinksComponent } from './Pages/live-links/live-links.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { PracticalSessionComponent } from './Pages/dashboard/practical-session/practical-session.component';
import { FirstYearComponent } from './Pages/dashboard/practical-session/first-year/first-year.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    MasterclassesComponent,
    SubjectComponent,
    LiveLinksComponent,
    PracticalSessionComponent,
    FirstYearComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
