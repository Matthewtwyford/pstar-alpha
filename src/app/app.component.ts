import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-root',
template: `
<mat-toolbar color="primary">
  <mat-toolbar-row>
    <span [routerLink]="['/']" matTooltip="Home">Pstar app</span>
    <span class="spacer"></span>

     <button mat-button [routerLink]="['/categories']" matTooltip="Categories">
      <mat-icon aria-label="icon-button with a heart icon">book</mat-icon> Categories
    </button>

       <button mat-button [routerLink]="['/categories']" matTooltip="Categories">
      <mat-icon aria-label="icon-button with a heart icon">airplanemode_active</mat-icon>
    </button>

    <button mat-button [routerLink]="['/categories']" matTooltip="Categories">
      <mat-icon aria-label="icon-button with a heart icon">assignment_turned_in</mat-icon> Take exam
    </button>

  </mat-toolbar-row>
</mat-toolbar>

<router-outlet></router-outlet>

<mat-toolbar color='accent'>
  <span class='spacer'></span>
    <p>© Copyright Angular Apps 2017.</p>
    <span class='spacer'></span>
    
     <button mat-button [routerLink]="['/abbreviations']" matTooltip="Categories">
        <mat-icon aria-label="icon-button with a heart icon">book</mat-icon> Abbreviation
     </button> 
    
</mat-toolbar>
`
})
export class AppComponent implements OnInit {
  title = 'pstar';

    ngOnInit() {
       sessionStorage.setItem('pstar' , '');
    }

}
