import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
template:`
 <app-pagetitle [pageTitle]="'Study'"></app-pagetitle>
{{ id }}
 <mat-card>Simple card</mat-card>
`,
styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit, OnDestroy {
  title = 'Study';

  id: number;
  private sub: any;

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
