import { Component } from '@angular/core';

@Component({
selector: 'app-abbreviations',
template: `
<app-pagetitle [pageTitle]="title"></app-pagetitle>


<mat-list *ngFor="let letter of abbreviations">
  <h2 mat-subheader>narm  {{ letter }}</h2>
  <mat-list-item *ngFor="let item of letter">
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{ letter.attr }}</h4>
    <p mat-line> {{ item.text }}</p>
  </mat-list-item>
  <mat-divider></mat-divider>
</mat-list>

`,
style : []
})
export class AbbreviationsComponent {
  title = 'Abbreviations';


  abbreviations: any = [

    "A" : [
       { attr: 'AAE', text: 'Above Aerodrome level'},
       { attr: 'ADIZ', text: 'Air Defence Identicationm Zone'},
      ],
    
     "B" : [
       { attr: 'BB', text: 'VVVAbove Aerodrome level'},
       { attr: 'BB', text: 'CCCCAir Defence Identicationm Zone'},
      ],
     "C" : [
       { attr: 'CC', text: 'VVVAbove Aerodrome level'},
       { attr: 'CC', text: 'CCCCAir Defence Identicationm Zone'},
      ],
     "D" : [
       { attr: 'DD', text: 'VVVAbove Aerodrome level'},
       { attr: 'DD', text: 'CCCCAir Defence Identicationm Zone'},
      ],
     "E" : [
       { attr: 'DD', text: 'VVVAbove Aerodrome level'},
       { attr: 'DD', text: 'CCCCAir Defence Identicationm Zone'},
      ],
  ];
 
  
}
