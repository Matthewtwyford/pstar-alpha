import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
template:`
 <app-pagetitle [pageTitle]="'Study'"></app-pagetitle>
{{ id }}
 <mat-card>
   <h2> Q.1 Which statement is true with regard to aircraft converging at approximately the same altitude?.</h2>
   <mat-list role="list">
    <mat-list-item role="listitem">(1) A jet airliner has the right of way over all other aircraft</mat-list-item>
    <mat-list-item role="listitem">(2) An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.</mat-list-item>
    <mat-list-item role="listitem">(3) An aeroplane has the right of way over all other aircraft which are converging from the left.</mat-list-item>
    <mat-list-item role="listitem">(4) Aeroplanes towing gliders must give way to helicopters.


<mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
  <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
    {{season}}
  </mat-radio-button>
</mat-radio-group>
<div class="example-selected-value">Your favorite season is: {{favoriteSeason}}</div>


</mat-list-item>
  </mat-list>
</mat-card>
`,
styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit, OnDestroy {
  
  title = 'Study';

  id: number;
  private sub: any;

  favoriteSeason: string;

  seasons = [ 'Winter', 'Spring', 'Summer', 'Autumn' ];

  constructor(
      private route: ActivatedRoute
      ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
       this.id = +params['id'];
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
