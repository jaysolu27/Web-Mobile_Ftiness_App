import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsDetailsComponent } from '../components/products-details/products-details.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home', component: ProductsListComponent },
    { path: 'product-details/:id', component: ProductsDetailsComponent},
    { path: 'about', component: AboutComponent}
  ];
  
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }