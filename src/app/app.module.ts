import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerCarsComponent } from './buyer-cars/buyer-cars.component';
import { SellerCarsComponent } from './seller-cars/seller-cars.component';
import { HomePageComponent } from './home-page/home-page.component';

import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './routing/app-routing.module';

import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import { SingleCarItemComponent } from './single-car-item/single-car-item.component';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    SellerDashboardComponent,
    BuyerDashboardComponent,
    BuyerCarsComponent,
    SellerCarsComponent,
    HomePageComponent,
    SingleCarItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
