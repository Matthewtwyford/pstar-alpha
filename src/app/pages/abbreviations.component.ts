import { Component } from '@angular/core';

import { ABBREVIATIONS } from '../abbreviations';


@Component({
selector: 'app-abbreviations',
template: `


<app-pagetitle [pageTitle]="abbreviations.title"></app-pagetitle>

<mat-grid-list cols="12" rowHeight="400px" gutterSize='0px'>
  <mat-grid-tile *ngFor="let letter of abbreviations.letters"
     
     [colspan]="12"
     [rowspan]="1"
     [style.background]="'#F4F4F4'">
  
      <mat-card class="card">
        <mat-card-header>
            <mat-card-title><h2>{{ letter.letter }}</h2></mat-card-title>
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
   

  
   constructor ( ) {
     
   }
  
  

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
        {
        'letter' : "C",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "D",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        }, 
         {
        'letter' : "E",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        }, 
        {
        'letter' : "F",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "G",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "H",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "I",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "J",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "K",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "L",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        }, 
        {
        'letter' : "M",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "N",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "O",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        }, 
        {
        'letter' : "P",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },         
        {
        'letter' : "Q",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },          
        {
        'letter' : "R",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "S",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },      
         {
        'letter' : "T",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },      
        {
        'letter' : "U",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },                    
        {
        'letter' : "V",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },              
        {
        'letter' : "W",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },    
         {
        'letter' : "X",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
         {
        'letter' : "Y",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        },
        {
        'letter' : "Z",
          attrs : [
            { name: "C",  text : 'A jet airliner has the right of way over all other aircraft' },
            { name: "CC", text : 'An aircraft towing objects has the right of way over all power-driven heavier-than-air aircraft.' },
            { name: "CCC", text : 'An aeroplane has the right of way over all other aircraft which are converging from the left.' }
            ]
        }
    ]
  };
 
}
