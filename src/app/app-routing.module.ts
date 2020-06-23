import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routes for page component
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';

// auth-guard
import { AuthGuardService as AuthGuard } from './keycloak/guard/auth-guard.service';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';


const routes: Routes = [{
    path: 'services',
    component: ServicesPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'request',
    component: RequestPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'inventory',
    component: InventoryPageComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'services', pathMatch: 'full' },
  {path: '404', component: Error404PageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }