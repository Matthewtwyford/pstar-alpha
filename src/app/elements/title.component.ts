import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagetitle',
  template: `
  <h1>{{ pageTitle }}</h1>
  <hr/>
  `,
})
export class TitleComponent implements OnInit {

    @Input() pageTitle: string;
    ngOnInit() {}

}
