import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'pstar';

    ngOnInit() {
      
       sessionStorage.setItem('pstar', "");
      
    }

}
