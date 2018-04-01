import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-tags',
template: `
<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Tabs with text labels</h2>
    <mat-tab-group class="demo-tab-group">
      <mat-tab label="Tab 1">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 2">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>  
      </mat-tab>
      <mat-tab label="Tab 3" disabled>
        No content  
      </mat-tab>
      <mat-tab label="Tab 4">
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>  
      </mat-tab>
      <mat-tab label="Tab 5">
        No content  
      </mat-tab>
      <mat-tab label="Tab 6">
        No content  
      </mat-tab>
    </mat-tab-group>
  </mat-card-content>
</mat-card>

<mat-card>
  <mat-card-content>
    <h2 class="example-h2">Tabs with icon labels</h2>
    <mat-tab-group class="demo-tab-group">
      <mat-tab label="Tab 1">
        <ng-template mat-tab-label>
          <mat-icon>security</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>
      </mat-tab>
      <mat-tab label="Tab 2">
        <ng-template mat-tab-label>
          <mat-icon>attach_file</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>  
      </mat-tab>
      <mat-tab label="Tab 3" disabled>
        <ng-template mat-tab-label>
          <mat-icon>block</mat-icon>
        </ng-template>
        No content  
      </mat-tab>
      <mat-tab label="Tab 4">
        <ng-template mat-tab-label>
          <mat-icon>loop</mat-icon>
        </ng-template>
        <div class="demo-tab-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.
          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.
          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,
          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,
          orci enim rutrum enim, vel tempor sapien arcu a tellus.
        </div>  
      </mat-tab>
      <mat-tab label="Tab 5">
        <ng-template mat-tab-label>
          <mat-icon>build</mat-icon>
        </ng-template>
        No content  
      </mat-tab>
      <mat-tab label="Tab 6">
        <ng-template mat-tab-label>
          <mat-icon>thumb_down</mat-icon>
        </ng-template>
        No content  
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
