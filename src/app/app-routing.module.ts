import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {
    path: '',
    data: { title: 'Home - TP Depot' },
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'shop',
    data: { title: 'Shop - TP Depot' },
    component: ShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
