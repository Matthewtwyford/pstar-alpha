import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  
  tester = [
    {text: 'One', cols: 2, rows: 1, color: 'red'},
    {text: 'Two', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  
  
  
}
