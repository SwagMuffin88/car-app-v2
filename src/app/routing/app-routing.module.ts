import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuyerDashboardComponent} from "../buyer-dashboard/buyer-dashboard.component";
import {SellerDashboardComponent} from "../seller-dashboard/seller-dashboard.component";
import {HomePageComponent} from "../home-page/home-page.component";
import {SellerCarsComponent} from "../seller-cars/seller-cars.component";
import {BuyerCarsComponent} from "../buyer-cars/buyer-cars.component";

const routes: Routes = [
  { path: 'buyer/dashboard', component: BuyerDashboardComponent },
  { path: 'seller/dashboard', component: SellerDashboardComponent},
  { path: 'my-cars', component: BuyerCarsComponent},
  { path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
