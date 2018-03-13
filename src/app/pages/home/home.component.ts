import { Component } from '@angular/core';

@Component({
selector: 'app-home',
template: `
<mat-grid-list cols="4" rowHeight="350px">
  <mat-grid-tile
      *ngFor="let tile of tiles"
      [colspan]="tile.cols"
      [rowspan]="tile.rows"
      [style.background]="tile.color">
      <img mat-card-image src="/src/assets/images/{{ tile.img }}.jpg" alt="Photo of a Shiba Inu">
    <h2>{{tile.text}}</h2>
  </mat-grid-tile>
</mat-grid-list>
`,
   styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home';

   tiles = [
    {text: 'Take the Test', cols: 3, rows: 1, color: 'lightblue', img: 'photo1' },
    {text: 'Revision',      cols: 1, rows: 2, color: 'lightgreen', img: 'photo1' },
    {text: 'Categories',    cols: 1, rows: 1, color: 'lightpink', img: 'photo1' },
    {text: 'Disclaimer',    cols: 2, rows: 1, color: '#DDBDF1', img: 'photo1' },
  ];

}
