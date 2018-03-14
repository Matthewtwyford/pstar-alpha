import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
template:`
 <app-pagetitle [pageTitle]="'Tester'"></app-pagetitle>
{{ catid }}
<mat-card>
   <h2> Q.1 Which statement is true with regard to aircraft converging at approximately the same altitude?.</h2>
   
   <mat-radio-group class="example-radio-group" [(ngModel)]="answer">
    <mat-radio-button  *ngFor="let answer of answers" class="example-radio-button" [value]="answer.option">
      {{answer.option}} : {{answer.correct}}
    </mat-radio-button>
  </mat-radio-group>

  <!--<div class="example-selected-value">ANSWER: {{ answer.correct }}</div>-->

</mat-card>
`,
styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  catid: number;
  
  answer: any;
  private sub: any;

  answers = [
    { option :  'A jet airliner has the right of way over all other aircraft', correct: false  },
    { option : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.', correct: true },
    { option : 'An aeroplane has the right of way over all other aircraft which are converging from the left.', correct: false },
    { option : 'Aeroplanes towing gliders must give way to helicopters.', correct: false }
   ];

  constructor(
      private route: ActivatedRoute
      ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
       this.catid = +params['catid'];
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
