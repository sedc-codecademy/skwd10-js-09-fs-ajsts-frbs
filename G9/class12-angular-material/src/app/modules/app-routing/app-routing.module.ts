import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/components/about/about.component';
import { FavoriteThingsComponent } from 'src/app/components/favorite-things/favorite-things.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { ProductPanelComponent } from 'src/app/components/product-panel/product-panel.component';
import { RegisterStepperComponent } from 'src/app/components/register-stepper/register-stepper.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LoginComponent,
    title: 'Login Page',
  },
  {
    path: 'favorite',
    component: FavoriteThingsComponent,
    title: 'Favorite Things Page',
  },
  {
    path: 'products',
    component: ProductPanelComponent,
    title: 'Products Page',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page',
  },
  {
    path: 'stepper',
    component: RegisterStepperComponent,
    title: 'Stepper Page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
