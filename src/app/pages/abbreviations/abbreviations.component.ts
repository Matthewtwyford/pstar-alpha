import { Component } from '@angular/core';

@Component({
selector: 'app-abbreviations',
template: `
<app-pagetitle [pageTitle]="abbreviations.title"></app-pagetitle>

{{ abbreviations | json }}  
<hr/>

    
<mat-grid-list cols="12" rowHeight="400px" gutterSize='20px'>
  
  <mat-grid-tile *ngFor="let letter of abbreviations.letters"
     
     [colspan]="12"
     [rowspan]="1"
     [style.background]="'#F4F4F4'">
  
      <mat-card class="card">
        <mat-card-header>
          
          <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title> <h2>{{ letter.letter }}</h2></mat-card-title>
          </mat-card-header>
          
          <mat-card-content>
             <mat-list role="list">
                <mat-list-item role="listitem" *ngFor="let attr of letter.attrs">
                  {{ attr.name }} {{ attr.text }}
                    <mat-divider></mat-divider>
                </mat-list-item>
              </mat-list>
          </mat-card-content>
       </mat-card>
    
   </mat-grid-tile>
 </mat-grid-list>
  
  

`
})
export class AbbreviationsComponent {
   

    abbreviations = {
    
    'title' : 'Abbreviations',
    'letters' : [
       {
        'letter' : "A",
          attrs : [
            { name: "ATIZ",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "AA", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "AAAA", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' },
            { name: "AAAAA", text : 'Aeroplanes towing gliders must give way to helicopters.' }
            ]
        },
        {
        'letter' : "B",
          attrs : [
            { name: "BB",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "BB", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "BBBBBB", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' },
            { name: "BBBBB", text : 'Aeroplanes towing gliders must give way to helicopters.' }
            ]
        },     
    ]
  };
  
  
  /*
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
         "attrs" : [
           { attr: 'AAE', text: 'Above Aerodrome level'},
           { attr: 'ADIZ', text: 'Air Defence Identicationm Zone'},                 
         ]

      }
      
      
    
    ]
    
    
  };
   */
 
  
  
}
