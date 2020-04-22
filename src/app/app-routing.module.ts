import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routes for page component
import { ProvisioningPageComponent } from './pages/provisioning-page/provisioning-page.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';

// auth-guard
import { AuthGuardService as AuthGuard } from './core/guard/auth-guard.service';


const routes: Routes = [{
    path: 'provisioning',
    component: ProvisioningPageComponent,
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
  { path: '', redirectTo: 'provisioning', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }