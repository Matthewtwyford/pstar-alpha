import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/index';
import { PublicCmsService, SessionStorageService } from './_services/index';
import { HeaderFooterResolver,
         HomeResolver,
         FeaturesResolver,
          TermsTotalResolver,
          TermsAppliancesResolver,
          TermsSystemsResolver,
         FaqsResolver,
         PrivacyResolver,
         ContactResolver,
         LoginResolver,
         ActivateResolver,
         ForgotResolver,
         NotFoundResolver
        } from './resolves/index';
import { PublicComponent } from './public.component';
import { HomeComponent,
         FeaturesComponent,
         StaticPublicComponent,
         LoginComponent,
         ForgotpasswordComponent,
         ForgotpasswordSubmitComponent,
         ActivateComponent,
         } from './pages/index';
const routes: Routes = [
    { path: '', component: PublicComponent, resolve: { content: HeaderFooterResolver }, children: [
        { path: '',  redirectTo: 'home', pathMatch: 'full', },
        { path: 'home', component: HomeComponent, resolve: { content: HomeResolver } },

        { path: '404', component: StaticPublicComponent, resolve: { content: NotFoundResolver } },
    ]},
    { path: 'dash', canActivate: [AuthGuard], loadChildren: 'app/dash/dash.module#DashModule' },
    { path: '**', redirectTo: '404', }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }, // <-- debugging purposes only
      { useHash: true }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [ ]
})
export class AppRoutingModule {}
