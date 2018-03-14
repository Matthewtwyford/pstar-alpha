import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
template:`
 <app-pagetitle [pageTitle]="'Study'"></app-pagetitle>
{{ catid }}
<mat-card>
   <h2> Q.1 Which statement is true with regard to aircraft converging at approximately the same altitude?.</h2>
   
   <mat-list role="list" *ngFor="let question of questions">
    <mat-list-item role="listitem">{{ question.option }} : {{ question.correct }} </mat-list-item>
  </mat-list>

</mat-card>
`,
styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit, OnDestroy {

  title = 'Study';
  catid: number;
  
  answer: any;
  private sub: any;

  questions = [
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
