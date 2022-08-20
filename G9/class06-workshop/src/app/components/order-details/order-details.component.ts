import { Component, OnInit } from '@angular/core';
import { Order, OrderStatus } from 'src/app/interfaces/order';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  selectedOrder: Order;
  orderStatus = OrderStatus;
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.selectedOrderEmitter.subscribe((order: Order) => {
      this.selectedOrder = order;
    });
  }

  onUpdateStatus(status: OrderStatus) {
    this.ordersService.updateOrderStatus(this.selectedOrder.id, status);
  }
}
