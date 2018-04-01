import { Component } from '@angular/core';

@Component({
selector: 'app-home',
template: `
<mat-grid-list cols="4" rowHeight="350px">
  <mat-grid-tile [routerLink]="[tile.link]"
      *ngFor="let tile of tiles"
      [colspan]="tile.cols"
      [rowspan]="tile.rows"
      [style.background]="tile.color">
      <img mat-card-image src="assets/images/{{ tile.img }}.jpeg" alt="">
    <!--<h2>{{tile.text}}</h2>-->
  </mat-grid-tile>
</mat-grid-list>
`,
})
export class HomeComponent {
  title = 'home';

   tiles = [
    {text: 'Take the Test', cols: 3, rows: 1, color: 'lightblue', img: 'photo1', link: '/categories' },
    {text: 'Revision',      cols: 1, rows: 2, color: 'lightgreen', img: 'photo2', link: '/categories' },
    {text: 'Categories',    cols: 1, rows: 1, color: 'lightpink', img: 'photo3', link: '/categories' },
    {text: 'Disclaimer',    cols: 2, rows: 1, color: '#DDBDF1', img: 'photo4', link: '/disclaimer' },
    {text: 'abbreviations', cols: 4, rows: 1, color: '#DDBDF1', img: 'photo6', link: '/abbreviations' },
  ];

}
