import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer-dashboard/buyer-dashboard.component';
import { BuyerCarsComponent } from './buyer-cars/buyer-cars.component';
import { SellerCarsComponent } from './seller-cars/seller-cars.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './routing/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SellerDashboardComponent,
    BuyerDashboardComponent,
    BuyerCarsComponent,
    SellerCarsComponent,
    HomePageComponent,
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        RouterModule,
        CommonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
