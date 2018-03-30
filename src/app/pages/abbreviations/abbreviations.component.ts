import { Component } from '@angular/core';

@Component({
selector: 'app-abbreviations',
template: `
<app-pagetitle [pageTitle]="abbreviations.title"></app-pagetitle>

  {{ abbreviations.letters |  json }}
  
<!--
<mat-list *ngFor="let letter of abbreviations.letters">
  <h2 mat-subheader> {{ letterTitle }}</h2>
  <mat-list-item *ngFor="let item of letter">
    <mat-icon mat-list-icon>folder</mat-icon>
    <h4 mat-line>{{ letter.attr }}</h4>
    <p mat-line> {{ item.text }}</p>
  </mat-list-item>
  <mat-divider></mat-divider>
</mat-list>
-->


  `,
  style : []
})
export class AbbreviationsComponent {
  title = 'Abbreviations';

 myObj = {
    "name":"John",
    "age":30,
    "cars": [
        
        { "name":"Ford", 
          "models":[ 
            "Fiesta", 
            "Focus", 
            "Mustang" 
          ] 
        },
        
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
 } 
  
  
  abbreviations = {
    
    "title" : "Abbreviations",
    
    "letters" : [
        
        "letterTitle" : "A" ,
    
         { attr: 'AAE', text: 'Above Aerodrome level'},
         { attr: 'ADIZ', text: 'Air Defence Identicationm Zone'},
    
    
    ]
    
    
    
  };
 
  
}
