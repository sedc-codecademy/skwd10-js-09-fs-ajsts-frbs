import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ReactiveFormComponent } from 'src/app/components/reactive-form/reactive-form.component';
import { TemplateFormComponent } from 'src/app/components/template-form/template-form.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { OrderListComponent } from 'src/app/components/order-list/order-list.component';
import { OrderDetailsComponent } from 'src/app/components/order-details/order-details.component';

// How to setup routing?
/*
1. Create an app-routing.module.ts (The routing logic will exist here)

2. In the AppRoutingModule create a routes array, 
    consisting of route objects {path, component, title}

3. Tell the RouterModule where the routing will function (RouterModule.forRoot(routes))

4. Export the Router Module, so that AppModule can access it

5. Import AppRoutingModule into AppModule. (AppModule is the main container for ALL the code)

6. Tell Angular where the routing is going to happen in the HTML. (<router-outlet>)
    This happens in an HTML file, like app.component.html

7. Set up a navigation bar with links. You can make any HTML element (like a <div>) to be
an angular router link by giving the routerLink="/route-name" directive

8. You can tell Angular to place a class on the currently active route. You can choose
ANY class name. Usually go with active. 

This can be done by using the routerLinkActive="class-name" directive.
*/

/* Sub Routing */
/* How to setup a dynamic subroute */

/*
  9. Create the component that will be rendered dynamically (e.x Order Details Component)

  10. Within a different component, set up a (click) listener, inject the Router and use it to .navigate()
  to the proper dynamic route, while also supplying in the dynamic subroute param.

  Example (Order List Component)
  this.router.navigate(['order-details', selectedOrder.id]);

  11. You have access to this param within the navigated component through the ActivatedRoute snapshot
  Example (Order Details Component)
  this.orderId = Number(this.route.snapshot.params['id']);

*/


// Point #2
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
    title: 'Reactive Forms Page',
  },
  {
    path: 'template',
    component: TemplateFormComponent,
    title: 'Template Forms Page',
  },
  {
    path: 'orders',
    component: OrderListComponent,
  },
  {
    path: 'order-details/:id',
    component: OrderDetailsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    title: 'Not Found',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  declarations: [],
  // Point #3
  imports: [CommonModule, RouterModule.forRoot(routes)],
  // Point #4
  exports: [RouterModule],
})
export class AppRoutingModule {}
