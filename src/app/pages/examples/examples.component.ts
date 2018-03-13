import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent {
  title = 'exmaple';
  
    color = 'primary';
  mode = 'determinate';
  value = 50;
  
  
  tester = [
    {text: 'Soemthign', cols: 2, rows: 1, color: '#D32F2F'},
    {text: 'something else', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
    
    isLinear = false;

  constructor() { }

  ngOnInit() {}
  
}
