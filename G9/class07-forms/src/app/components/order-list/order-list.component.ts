import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.ordersService.fetchOrders();
    this.ordersService.ordersEmitter.subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  // Point #10
  onNavigateOrder(selectedOrder: Order) {
    this.router.navigate(['order-details', selectedOrder.id]);
  }
}
