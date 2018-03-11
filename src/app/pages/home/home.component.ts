import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

   <mat-grid-list cols="4" rowHeight="300px">
      <mat-grid-tile
          *ngFor="let tile of tiles"
          [colspan]="tile.cols"
          [rowspan]="tile.rows"
          [style.background]="tile.color">
        {{tile.text}}
      </mat-grid-tile>
    </mat-grid-list>

  <mat-grid-list cols="6" rowHeight="200px">
  <mat-grid-tile
      *ngFor="let category of categories"
      [colspan]="category.cols"
      [rowspan]="category.rows"
      [style.background]="category.color">
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{category.title}}</mat-card-title>
        <mat-card-subtitle>{{category.text}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <!--
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
        -->
      </mat-card-content>
      <mat-card-actions>
          <button mat-raised-button color="primary">Primary</button>
          <button mat-raised-button color="accent">Accent</button>
      </mat-card-actions>
    </mat-card>
  </mat-grid-tile>
</mat-grid-list>
`,
   styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home';

   tiles = [
    {text: 'Take the Test', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  

  categories = [
    {title: '1.0 COLLISION AVOIDANCE', text: 'sdsdsdsds', cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '2.0 VISUAL SIGNALS' , text: 'sdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '3.0 COMMUNICATIONS' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '4.0 AERODROMES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '5.0 EQUIPMENT' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '6.0 PILOT RESPONSIBILITIES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '7.0 WAKE TURBULENCE' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '8.0 AEROMEDICAL' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '9.0 FLIGHT PLANS AND FLIGHT ITINERARIES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '10.0 CLEARANCES AND INSTRUCTIONS' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '11.0 AIRCRAFT OPERATIONS' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '12.0 REGULATIONS - GENERAL AIRSPACE' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '13.0 CONTROLLED AIRSPACE' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
    {title: '14.0 AVIATION OCCURRENCES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#F4F4F4'},
    {title: '15.0 PIE CHOICES' , text: 'sdsdsdsds' , cols: 2, rows: 1, color: '#FFFFFFF'},
  ];

}
