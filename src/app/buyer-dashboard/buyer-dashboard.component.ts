import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BuyerCarsComponent} from "../buyer-cars/buyer-cars.component";


@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
