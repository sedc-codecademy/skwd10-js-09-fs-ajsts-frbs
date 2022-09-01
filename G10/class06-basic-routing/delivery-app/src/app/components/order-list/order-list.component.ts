import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.fetchOrders();

    this.ordersService.ordersEmitter.subscribe((value: Order[]) => {
      this.orders = value;
      console.log(this.orders);
    });
  }

  onItemClick(order: Order) {
    this.ordersService.onOrderSelect(order);
  }
}
