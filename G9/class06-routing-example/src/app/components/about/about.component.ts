import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  routingSteps: string[] = [
    'Create an app-routing.module.ts (The routing logic will exist here)',
    'In the AppRoutingModule create a routes array, consisting of route objects {path, component, title}',
    'Tell the RouterModule where the routing will function (RouterModule.forRoot(routes))',
    'Export the Router Module, so that AppModule can access it',
    'Import AppRoutingModule into AppModule. (AppModule is the main container for ALL the code)',
    'Tell Angular where the routing is going to happen in the HTML. (<router-outlet>) This happens in an HTML file, like app.component.html',
    'Set up a navigation bar with links. You can make any HTML element (like a <div>) to be an angular router link by giving the routerLink="/route-name" directive',
    'You can tell Angular to place a CSS class on the currently active route. You can choose ANY class name. Usually go with active. This can be done by using the routerLinkActive="class-name" directive.',
  ];

  subRoutingSteps: string[] = [
    ' Within a different component, set up a (click) listener, inject the Router and use it to .navigate() to the proper dynamic route, while also supplying in the dynamic subroute param.',
    'You have access to this param within the navigated component through the ActivatedRoute snapshot',
  ];
}
