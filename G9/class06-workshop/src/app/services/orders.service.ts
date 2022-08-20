import { EventEmitter, Injectable } from '@angular/core';
import { Order, OrderStatus } from '../interfaces/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: Order[];
  selectedOrder: Order;
  ordersEmitter: EventEmitter<Order[]> = new EventEmitter<Order[]>();
  selectedOrderEmitter: EventEmitter<Order> = new EventEmitter<Order>();

  constructor() {}

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

  updateOrderStatus(orderId: number, newStatus: OrderStatus) {
    this.orders.forEach((order: Order) => {
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
