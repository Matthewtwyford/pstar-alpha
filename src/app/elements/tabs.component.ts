import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-tags',
template: `

<mat-card>
  <mat-card-content>
   
    <mat-tab-group class="demo-tab-group">
      <mat-tab label="Tab 1">
        <ng-template mat-tab-label>
         <mat-icon aria-label="icon-button with a heart icon">list</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
        </div>
      </mat-tab>

      <mat-tab label="Tab 2">
        <ng-template mat-tab-label>
          <mat-icon aria-label="icon-button with a heart icon">assignment_turned_in</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
        </div>  
      </mat-tab>

    </mat-tab-group>
  </mat-card-content>
</mat-card>


`,
})
export class TabsComponent implements OnInit {

   @Input() pageTitle: string;
   ngOnInit() {}
}
