import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
