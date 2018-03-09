import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  
  tester = [
    {text: 'Soemthign', cols: 2, rows: 1, color: '#D32F2F'},
    {text: 'something else', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  

}
