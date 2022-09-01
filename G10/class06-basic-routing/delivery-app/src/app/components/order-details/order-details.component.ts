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
    this.ordersService.selectedOrderEmitter.subscribe((value: Order) => {
      this.selectedOrder = value;
    });
  }

  onStatusChange(newStatus: OrderStatus) {
    this.ordersService.updateOrderStatus(this.selectedOrder.id, newStatus);
  }
}
