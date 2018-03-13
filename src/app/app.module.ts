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
         MatListModule,
         MatTooltipModule
         } from '@angular/material';

import { HomeComponent,
         ExamplesComponent,
         AbbreviationsComponent,
         CategoriesComponent,
         } from './pages/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    AbbreviationsComponent,
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
    MatGridListModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
