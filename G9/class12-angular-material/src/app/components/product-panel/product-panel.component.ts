import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, Product } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.scss'],
})
export class ProductPanelComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService, private dialog: MatDialog) {}
  productSubscription: Subscription;
  products: Product[];

  ngOnInit(): void {
    this.productSubscription = this.dataService.productData$.subscribe({
      next: (payload: Product[]) => (this.products = payload),
    });
    this.dataService.getAllProducts();
  }

  displayCurrentProduct(product: Product) {
    const dialogRef = this.dialog.open(ProductCardComponent, {
      width: '475px',
      data: product,
    });
    dialogRef.afterClosed().subscribe({
      next: (payload) => console.log('Dialog closed!', payload),
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
