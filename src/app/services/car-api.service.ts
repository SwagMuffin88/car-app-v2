import { Injectable } from '@angular/core';
import {Car} from "../models/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  private apiURL: string = 'https://crudcrud.com/api/4893b38f45ab4319b8047ea354fe56bf';
  private carEndPoint: string = '/seller/dashboard/';
  constructor() { }

  public createCar(carItem: Car): Promise<Response> {
    return fetch(this.apiURL+this.carEndPoint,
      {method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(carItem)
      });
  }
  public getAllCars(): Promise<Response> {
    return fetch(this.apiURL + this.carEndPoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  deleteCar(carName: string): Promise<Response> {
    return fetch(this.apiURL + this.carEndPoint + carName, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  }
}
