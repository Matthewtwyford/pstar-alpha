import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent,
         ExamplesComponent
      } from './pages/index';


const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', component: HomeComponent },
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
