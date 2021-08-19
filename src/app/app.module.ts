import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

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
import { ReferencesComponent } from './Routings/references/references.component';

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
    ReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
