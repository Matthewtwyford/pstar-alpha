import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
         StudyComponent,
         TestComponent
         } from './pages/index';

import { SessionStorageService
         } from './services/index';

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
    TestComponent,

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
    TitleComponent,
    FormsModule
  ],
  providers: [
    SessionStorageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
