import { Component } from '@angular/core';

@Component({
template:`
 <app-pagetitle [pageTitle]="'Study'"></app-pagetitle>
 <mat-card>Simple card</mat-card>
`,
styleUrls: ['./study.component.css']
})
export class StudyComponent {
  title = 'Study';
}
