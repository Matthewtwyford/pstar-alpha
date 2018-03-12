import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './abbreviations.component.html',
  styleUrls: ['./abbreviations.component.css']
})
export class AbbreviationsComponent {
  title = 'abbreviatsion';
  
  abbreviations = {
    
    
    "A" :[
       { attr: 'AAE', text: 'Above Aerodrome level'},
       { attr: 'ADIZ', text: 'Air Defence Identicationm Zone'},
      ],
     "B" :[
       { attr: 'BB', text: 'VVVAbove Aerodrome level'},
       { attr: 'BB', text: 'CCCCAir Defence Identicationm Zone'},
      ],
   
   
  }
}
