import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}
  orders: Order[];
  ngOnInit(): void {
    this.ordersService.fetchOrders();
    this.ordersService.ordersEmitter.subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  onOrderClick(selectedOrder: Order) {
    // this.ordersService.fetchOrderById(selectedOrder.id);
    this.ordersService.onOrderSelect(selectedOrder);
  }
}
