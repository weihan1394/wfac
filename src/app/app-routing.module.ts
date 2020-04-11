import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routes for page component
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProvisioningPageComponent } from './pages/provisioning-page/provisioning-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'provisioning', component: ProvisioningPageComponent},
  { path: '', redirectTo: 'provisioning', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomePageComponent, AboutPageComponent]