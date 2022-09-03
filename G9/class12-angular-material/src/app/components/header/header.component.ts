import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, Product } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  products: Product[] = [];
  navigationListItems: string[] = [
    'home',
    'products',
    'register',
    'favorite',
    'stepper',
    'about',
  ];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.productData$.subscribe({
      next: (payload) => (this.products = payload),
    });
  }
}
