import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent,
         ExamplesComponent,
         AbbreviationsComponent,
         CategoriesComponent,
         StudyComponent,
         TestComponent
        } from './pages/index';

const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', component: HomeComponent },

    { path: 'categories', component: CategoriesComponent }, 

    { path: 'study/:catid', component: StudyComponent },
    { path: 'test/:catid', component: TestComponent },

    { path: 'abbreviations', component: AbbreviationsComponent },
    { path: '404', component: HomeComponent },
    { path: 'examples', component: ExamplesComponent },
    { path: '**', redirectTo: '404', }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: true, enableTracing: false }, // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class AppRoutingModule {}
