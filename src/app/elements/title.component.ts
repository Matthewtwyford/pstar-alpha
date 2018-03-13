import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-pagetitle',
template: `
<section class="mat-typography">
  <h1>{{ pageTitle }}</h1>
</section>
`,
})
export class TitleComponent implements OnInit {

   @Input() pageTitle: string;
   ngOnInit() {}
}
