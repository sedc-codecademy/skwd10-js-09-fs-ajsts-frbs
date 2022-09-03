import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FavoriteThingsComponent } from './components/favorite-things/favorite-things.component';
import { ProductPanelComponent } from './components/product-panel/product-panel.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RegisterStepperComponent } from './components/register-stepper/register-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FavoriteThingsComponent,
    ProductPanelComponent,
    ProductCardComponent,
    RegisterStepperComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
