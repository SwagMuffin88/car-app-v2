export class Car {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  isAvailable: boolean;


  constructor(name: string, price: number, quantity: number, isAvailable: boolean, id?: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.isAvailable = isAvailable;
  }
}

