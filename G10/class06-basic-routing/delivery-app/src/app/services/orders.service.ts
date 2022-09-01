import { EventEmitter, Injectable } from '@angular/core';
import { Order, OrderStatus } from '../interfaces/order';

const ORDERS_URL = 'https://movies-api-sedc.herokuapp.com/orders/';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Order[];

  constructor() {}

  ordersEmitter = new EventEmitter<Order[]>();
  selectedOrderEmitter = new EventEmitter<Order>();

  fetchOrders() {
    fetch(ORDERS_URL)
      .then((res) => res.json())
      .then((data: Order[]) => {
        this.orders = data;
        this.ordersEmitter.emit(this.orders);
      });
  }

  updateOrderStatus(orderId: number, newStatus: OrderStatus) {
    this.orders.forEach((order) => {
      if (order.id === orderId) {
        order.status = newStatus;
        return;
      }
    });
    this.ordersEmitter.emit(this.orders);
  }

  onOrderSelect(order: Order) {
    this.selectedOrderEmitter.emit(order);
  }
}
