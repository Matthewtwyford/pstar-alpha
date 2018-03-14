import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
<mat-toolbar color="primary">
  <mat-toolbar-row>

    <span [routerLink]="['/']" matTooltip="Home">Pstar app</span>

    <span class="example-spacer"></span>

     <button mat-raised-button color="accent" [routerLink]="['/categories']" matTooltip="Categories">
      <mat-icon aria-label="icon-button with a heart icon">book</mat-icon> Categories
     </button>
     
     <button mat-raised-button color="accent" [routerLink]="['/pstar-exam']" matTooltip="Take exma">
      <mat-icon aria-label="icon-button with a heart icon">assignment_turned_in</mat-icon> Take Exam
     </button>
    
  </mat-toolbar-row>
</mat-toolbar>

<router-outlet></router-outlet>

<mat-toolbar color='accent'>
  <span class='spacer'></span>
    <h5>© Copyright Angular Apps 2017.</h5>
  <span class='spacer'></span>
     <button mat-raised-button color="primary" [routerLink]="['abbreviations']" matTooltip="Abbreviation">
      <mat-icon aria-label="icon-button with a heart icon">book</mat-icon> Abbreviation
     </button>
</mat-toolbar>

`,
})
export class AppComponent implements OnInit {
  title = 'pstar';

    ngOnInit() {
       sessionStorage.setItem('pstar' , '');
    }

}
