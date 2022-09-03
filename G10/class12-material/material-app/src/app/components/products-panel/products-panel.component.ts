import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService, Product } from 'src/app/data.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.scss'],
})
export class ProductsPanelComponent implements OnInit {
  products: Product[];

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataService.productsSubject.subscribe(
      (value) => (this.products = value)
    );
    this.dataService.getAllProducts();
  }

  onDisplayDetails(product: Product) {
    this.dialog.open(ProductDialogComponent, {
      width: '500px',
      data: product,
    });
  }
}
