import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
template:`
 <app-pagetitle [pageTitle]="page['title']"></app-pagetitle>
{{ catid }}


<mat-card *ngFor="let questions of page.questions">
   <h2>{{ questions.id }}  {{ questions.question }}</h2>   
   <mat-list role="list">
    <mat-list-item role="listitem" *ngFor="let option of questions.options">
        {{ option.text }} : {{ option.correct }} 
        <mat-divider></mat-divider>
    </mat-list-item>
  </mat-list>
</mat-card>
`,
styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit, OnDestroy {

  public catid: number;
  private sub: any;

  
  page = {
    "catid" : 1,
    "title" : 'Collision Avoidance',
    "questions" : [
       {
        "id" : 1,
        "question" : "Which statement is true with regard to aircraft converging at approximately the same altitude?",
        options : [
          { text : 'A jet airliner has the right of way over all other aircraft', correct: false  },
          { text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.', correct: true },
          { text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.', correct: false },
          { text : 'Aeroplanes towing gliders must give way to helicopters.', correct: false }
          ]
        },
       {
        "id" : 2,
        "question" : "When two aircraft are converging at approximately the same altitude",
        options : [
          { text : 'both aircraft shall alter heading to the left.', correct: false  },
          { text : 'the aircraft on the right shall avoid the other by descending.', correct: false },
          { text : 'the aircraft that has the other on its right shall give way.', correct: true },
          { text : 'the aircraft that has the other on its left shall give way.', correct: false }
        ]
       },
       {
        "id" : 3,
        "question" : "When two aircraft are converging at approximately the same altitude, which statement applies?",
        options : [
          { text : 'Gliders shall give way to helicopters.', correct: false  },
          { text : 'Aeroplanes shall give way to power-driven heavier-than-air aircraft.', correct: false },
          { text : 'Gliders shall give way to aeroplanes.', correct: false },
          { text : 'Power-driven heavier-than-air aircraft shall give way to gliders.', correct: true }
        ]
       },
    
    ]

 };
  


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
