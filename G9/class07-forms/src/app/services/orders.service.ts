import { EventEmitter, Injectable } from '@angular/core';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Order[];
  selectedOrder: Order;
  ordersEmitter: EventEmitter<Order[]> = new EventEmitter<Order[]>();
  selectedOrderEmitter = new EventEmitter<Order>();

  fetchOrders() {
    fetch('https://movies-api-sedc.herokuapp.com/orders/')
      .then((res) => res.json())
      .then((data) => {
        this.orders = data;
        this.ordersEmitter.emit(this.orders);
      });
  }

  fetchOrderById(id: number) {
    fetch(`https://movies-api-sedc.herokuapp.com/orders/${id}`)
      .then((res) => res.json())
      .then((order) => {
        this.selectedOrder = order;
        this.selectedOrderEmitter.emit(this.selectedOrder);
      });
  }

  constructor() {}
}
