import { Component } from '@angular/core';

@Component({
selector: 'app-abbreviations',
template: `
<app-pagetitle [pageTitle]="abbreviations.title"></app-pagetitle>

{{ abbreviations | json }}
<hr/>
{{ abbreviations.sections | json }}
<hr/>
{{ abbreviations.sections.attrs | json }}
  
  
<mat-list *ngFor="let sections of abbreviations.sections">
  <h2 mat-subheader> {{ sections.letterTitle }}</h2>


   <!-- 
  <mat-list-item *ngFor="let attrs of sections">
    <mat-icon mat-list-icon>folder</mat-icon>
  <h4 mat-line>{{ sections.attrs.attr }}</h4>
    <p mat-line> {{ sections.attrs.text }}</p>
  
  </mat-list-item>
  -->
  
  <mat-divider></mat-divider>

</mat-list>

`
})
export class AbbreviationsComponent {
  title = 'Abbreviations';

  abbreviations = {
    "title" : "Abbreviations",
    
    "sections" : [
 
        {
          "letterTitle" : "A" ,
          "attrs" : [
           { attr: 'AAE', text: 'Above Aerodrome level'},
           { attr: 'ADIZ', text: 'Air Defence Identicationm Zone'},          
          ]

      },
              {
          "letterTitle" : "B" ,
         // "attrs" : [
           // { attr: 'AAE', text: 'Above Aerodrome level'},
           // { attr: 'ADIZ', text: 'Air Defence Identicationm Zone'},          
         // ]

      }
      
      
    
    ]
    
    
  };
 
  
  
  
  
  
  
  
   myObj = {
    "name":"John",
    "age":30,
    "cars": [
        
        { 
          "name":"Ford", 
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
  
  
}
