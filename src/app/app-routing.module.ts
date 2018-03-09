import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplesComponent } from './pages/examples.component';


const routes: Routes = [
    
    { path: 'examples', component: ExamplesComponent },
    { path: '**', redirectTo: '', }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true }, // <-- debugging purposes only
      { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule {}
