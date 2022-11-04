import { Component, OnInit } from '@angular/core';
import {Car} from "../models/car.model";
import {CarApiService} from "../services/car-api.service";

@Component({
  selector: 'app-seller-cars',
  templateUrl: './seller-cars.component.html',
  styleUrls: ['./seller-cars.component.css']
})
export class SellerCarsComponent implements OnInit {

  carList: Car[] = [];

  newCarName: string = '';
  newCarPrice: number = 0;
  newCarQuantity: number = 0;
  newCarAvailability: boolean = false;

  constructor(private carAPIService: CarApiService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  public getAllCars() : void {
    this.carAPIService.getAllCars()
      .then((response) => response.json())
      .then((response: Car[]) => this.carList = response)
      .catch(console.log);
  }

  public addCar(): void {
    if (this.newCarName.length < 2) {
      alert("Please provide a car name")
      return;
    }
    if (this.newCarPrice < 200) {
      alert("Please provide a price at minimum of 200€")
      return;
    }
    if (this.newCarQuantity < 1) {
      alert("Please provide a quantity at minimum of 1")
      return;
    }
    const carItem: Car = new Car(this.newCarName, this.newCarPrice, this.newCarQuantity,
      this.newCarAvailability);

    this.carList.push(carItem);

    this.newCarName = '';
    this.newCarPrice = 0;
    this.newCarQuantity = 0;
    this.newCarAvailability = false;

    this.carAPIService.createCar(carItem)
      .then(() => {
        this.getAllCars();
      }).catch(console.log);
  }
  public deleteCarItem(carName: string): void {
    this.carAPIService.deleteCar(carName)
      .then(() => {this.getAllCars();})
      .catch(console.log)
  }

}
