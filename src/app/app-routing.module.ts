import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent,
         ExamplesComponent,
         AbbreviationsComponent,
         CategoriesComponent,
         StudyComponent
        } from './pages/index';

const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', component: HomeComponent },

    { path: 'study/:id', component: StudyComponent },

    { path: 'categories', component: CategoriesComponent,  children: [
        { path: '',  redirectTo: 'catergories', pathMatch: 'full', },
        { path: 'collision-avoidance', component: CategoriesComponent },
        { path: 'visual-signals', component: CategoriesComponent },
        { path: 'communications', component: CategoriesComponent },
        { path: 'aerodromes', component: CategoriesComponent },
        { path: 'pilot-responsibilites', component: CategoriesComponent },
        { path: 'wake-turbulance', component: CategoriesComponent },
        { path: 'aeromedical', component: CategoriesComponent },
        { path: 'flight-plans-and-flight-itineraries', component: CategoriesComponent },
        { path: 'clearances-and-instructions', component: CategoriesComponent },
        { path: 'aircraft-operations', component: CategoriesComponent },
        { path: 'regulatsion-general-airspace', component: CategoriesComponent },
        { path: 'controllled-airspace', component: CategoriesComponent },
        { path: 'aviation-occurrences', component: CategoriesComponent },
    ]},

    { path: 'abbreviations', component: AbbreviationsComponent },
    { path: '404', component: HomeComponent },
    { path: 'examples', component: ExamplesComponent },
    { path: '**', redirectTo: '404', }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: true, enableTracing: true }, // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule {}
