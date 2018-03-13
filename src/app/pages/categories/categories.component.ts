import { Component } from '@angular/core';

@Component({
template: `
 <app-pagetitle [pageTitle]="'Categories'"></app-pagetitle>

    <mat-grid-list cols="12" rowHeight="200px" gutterSize='20px'>

    <mat-grid-tile
        *ngFor="let category of categories"
        [colspan]="category.cols"
        [rowspan]="category.rows"
        [style.background]="category.color">

      <mat-card class="card">
        <mat-card-header>
         <div mat-card-avatar class="example-header-image"></div>
         <mat-card-title>{{ category.title }}</mat-card-title>
         <mat-card-subtitle>{{ category.text }}</mat-card-subtitle>
        </mat-card-header>

        <mat-card-actions>
          <button mat-raised-button color="primary" [routerLink]="['/study',  category.id ]" matTooltip="test">Study tester {{ category.id }}</button>
          <button mat-raised-button color="accent" [routerLink]="['/test']" matTooltip="Tester">Test</button>
        </mat-card-actions>

      </mat-card>
    </mat-grid-tile>
  </mat-grid-list>
`,
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  title = 'Categories';

  categories = [
    { id: 0, title: '1.0 COLLISION AVOIDANCE', text: 'sdsdsdsds', cols: 12, rows: 1, color: '#FFFFFFF'},
    { id: 1, title: '2.0 VISUAL SIGNALS' , text: 'sdsds' , cols: 12, rows: 1, color: '#F4F4F4'},
    { id: 2, title: '3.0 COMMUNICATIONS' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#FFFFFFF'},
    { id: 3, title: '4.0 AERODROMES' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#F4F4F4'},
    { id: 4, title: '5.0 EQUIPMENT' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#FFFFFFF'},
    { id: 5, title: '6.0 PILOT RESPONSIBILITIES' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#F4F4F4'},
    { id: 6, title: '7.0 WAKE TURBULENCE' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#FFFFFFF'},
    { id: 7, title: '8.0 AEROMEDICAL' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#F4F4F4'},
    { id: 8, title: '9.0 FLIGHT PLANS AND FLIGHT ITINERARIES' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#FFFFFFF'},
    { id: 9, title: '10.0 CLEARANCES AND INSTRUCTIONS' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#F4F4F4'},
    { id: 10, title: '11.0 AIRCRAFT OPERATIONS' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#FFFFFFF'},
    { id: 11, title: '12.0 REGULATIONS - GENERAL AIRSPACE' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#F4F4F4'},
    { id: 12, title: '13.0 CONTROLLED AIRSPACE' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#FFFFFFF'},
    { id: 13, title: '14.0 AVIATION OCCURRENCES' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#F4F4F4'},
    { id: 14, title: '15.0 PIE CHOICES' , text: 'sdsdsdsds' , cols: 12, rows: 1, color: '#FFFFFFF'},
  ];

}
