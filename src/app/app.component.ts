import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app';
  
  
  tester = [
    {text: 'Soemthign', cols: 2, rows: 1, color: '#D32F2F'},
    {text: 'something else', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  

}
