import { Component } from '@angular/core';

@Component({
template:`
<h1>{{ title }}</h1>
  <mat-card>Simple card</mat-card>
`,
styleUrls: ['./study.component.css']
})
export class StudyComponent {
  title = 'Study';
}
