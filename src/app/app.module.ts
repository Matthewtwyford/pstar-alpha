import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule,
         MatCheckboxModule,
         MatCardModule,
         MatToolbarModule,
         MatMenuModule,
         MatIconModule,
         MatGridListModule,
         MatListModule,
         MatTooltipModule,
         MatStepperModule,
         MatProgressSpinnerModule,
         MatRadioModule,
         MatSliderModule
         } from '@angular/material';

import { HomeComponent,
         ExamplesComponent,
         AbbreviationsComponent,
         CategoriesComponent,
         StudyComponent
         } from './pages/index';

import { TitleComponent
         } from './elements/index';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    AbbreviationsComponent,
    ExamplesComponent,
    StudyComponent,

    TitleComponent
  ],
  imports: [
    BrowserAnimationsModule,
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
    MatTooltipModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    
    FormsModule
  ],
  exports: [
    TitleComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
