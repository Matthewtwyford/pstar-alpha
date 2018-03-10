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

  
  
  <mat-grid-list cols="2" rowHeight="200px">
  <mat-grid-tile
      *ngFor="let item of tester"
      [colspan]="item.cols"
      [rowspan]="item.rows"
      [style.background]="item.color">
        
        
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{item.text}}</mat-card-title>
        <mat-card-subtitle>{{item.text}}</mat-card-subtitle>
      </mat-card-header>
      <!-- <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt=""> -->
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions>
          <button mat-raised-button color="primary">Primary</button>
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
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  
    tester = [
    {text: 'Commiticatons', cols: 2, rows: 1, color: '#FFFFFFF'},
    {text: 'Aviodance' , cols: 2, rows: 1, color: '#F4F4F4'},
  ];
  
}
