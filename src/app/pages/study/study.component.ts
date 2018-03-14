import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
template:`
 <app-pagetitle [pageTitle]="'Study'"></app-pagetitle>
{{ id }}
 <mat-card>
   <h2> Q.1 Which statement is true with regard to aircraft converging at approximately the same altitude?.</h2>
   
   <mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
    <mat-radio-button class="example-radio-button" *ngFor="let answer of answers" [value]="answer">
      {{answer}}
    </mat-radio-button>
  </mat-radio-group>
  <div class="example-selected-value">Your favorite season is: {{favoriteSeason}}</div>

</mat-card>
`,
styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit, OnDestroy {
  
  title = 'Study';

  id: number;
  private sub: any;

  answers = [ 
    'A jet airliner has the right of way over all other aircraft',
    'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.',
    'An aeroplane has the right of way over all other aircraft which are converging from the left.',
    'Aeroplanes towing gliders must give way to helicopters.'
    ];

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
