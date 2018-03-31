import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-pagetitle',
template: `
 <mat-grid-list cols="1" rowHeight="350px">
  <mat-grid-tile [colspan]="1" [rowspan]="1" [style.background]="'red'">
      <img mat-card-image src="/assets/images/photo1.jpeg" alt="">
    <h1>{{ pageTitle }}</h1>
  </mat-grid-tile>
</mat-grid-list>
`,
})
export class TitleComponent implements OnInit {

   @Input() pageTitle: string;
   ngOnInit() {}
}
