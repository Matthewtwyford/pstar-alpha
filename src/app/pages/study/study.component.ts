import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
template:`
 <app-pagetitle [pageTitle]="'Study'"></app-pagetitle>
{{ id }}
 <mat-card>
   <h2> Q.1 Which statement is true with regard to aircraft converging at approximately the same altitude?.</h2>
   <mat-list role="list">
     
    <mat-list-item role="listitem">
      <mat-radio-group class="example-radio-group" [(ngModel)]="answer0">
        <mat-radio-button class="example-radio-button" [value]="1">
            A jet airliner has the right of way over all other aircraft
        </mat-radio-button>
      </mat-radio-group>
    </mat-list-item>
    
    <mat-list-item role="listitem">
      <mat-radio-group class="example-radio-group" [(ngModel)]="answer1">
        <mat-radio-button class="example-radio-button" [value]="1">
            An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.
        </mat-radio-button>
      </mat-radio-group>
    </mat-list-item>

    <mat-list-item role="listitem">
      <mat-radio-group class="example-radio-group" [(ngModel)]="answer2">
        <mat-radio-button class="example-radio-button" [value]="1">
            An aeroplane has the right of way over all other aircraft which are converging from the left.
        </mat-radio-button>
      </mat-radio-group>
    </mat-list-item>
    
    <mat-list-item role="listitem">
      <mat-radio-group class="example-radio-group" [(ngModel)]="answer3">
        <mat-radio-button class="example-radio-button" [value]="1">
           Aeroplanes towing gliders must give way to helicopters.
        </mat-radio-button>
      </mat-radio-group>
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

  answer: string;

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
