import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  title = 'exmaple';
  
  
  tester = [
    {text: 'Soemthign', cols: 2, rows: 1, color: '#D32F2F'},
    {text: 'something else', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  
  
}
