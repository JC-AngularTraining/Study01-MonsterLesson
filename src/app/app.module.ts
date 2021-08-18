import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Example1Component } from './Routings/example1/example1.component';
import { Example2Component } from './Routings/example2/example2.component';
import { Example3Component } from './Routings/example3/example3.component';
import { UsersCard2Component } from './Routings/example2/users-card/users-card.component';
import { UsersCard3Component } from './Routings/example3/users-card/users-card.component';
import { UserServiceService } from './Routings/example3/services/user-service.service';
import { NavBarComponent } from './_nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './_page-not-found/page-not-found.component';
import { HomePageComponent } from './Routings/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    UsersCard2Component,
    Example3Component,
    UsersCard3Component,
    NavBarComponent,
    PageNotFoundComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
