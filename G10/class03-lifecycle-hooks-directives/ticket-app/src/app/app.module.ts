import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketPanelComponent } from './components/ticket-panel/ticket-panel.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { AppHoverShadowDirective } from './directives/app-hover-shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    TicketPanelComponent,
    TicketComponent,
    AppHoverShadowDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
