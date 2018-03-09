import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule,
         MatCheckboxModule,
         MatCardModule,
         MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatGridListModule,
         } from '@angular/material';


import { HomeComponent,
         ExamplesComponent,
         } from './pages/index';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
