import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './abbreviations.component.html',
  styleUrls: ['./abbreviations.component.css']
})
export class AbbreviationsComponent {
  title = 'abbreviatsion';

  abbreviations: any = [

    "A" :[
       { attr: 'AAE', text: 'Above Aerodrome level'},
       { attr: 'ADIZ', text: 'Air Defence Identicationm Zone'},
      ],
    
     "B" :[
       { attr: 'BB', text: 'VVVAbove Aerodrome level'},
       { attr: 'BB', text: 'CCCCAir Defence Identicationm Zone'},
      ],
     "C" :[
       { attr: 'CC', text: 'VVVAbove Aerodrome level'},
       { attr: 'CC', text: 'CCCCAir Defence Identicationm Zone'},
      ],
     "D" :[
       { attr: 'DD', text: 'VVVAbove Aerodrome level'},
       { attr: 'DD', text: 'CCCCAir Defence Identicationm Zone'},
      ],
     "E" :[
       { attr: 'DD', text: 'VVVAbove Aerodrome level'},
       { attr: 'DD', text: 'CCCCAir Defence Identicationm Zone'},
      ],

  ];
  
}
