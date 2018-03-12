import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './abbreviations.component.html',
  styleUrls: ['./abbreviations.component.css']
})
export class AbbreviationsComponent {
  title = 'abbreviatsion';
  
  abbreviations =  [
       { attr: 'AAE', text: 'Above Aerodrome level'},
       { attr: 'ADIZ', text: 'Air Defence Identicationm Zone'},
      ]
    
  
 
  }
  
  
}
