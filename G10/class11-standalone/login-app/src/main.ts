import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './app/components/not-found/not-found.component';

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/components/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./app/components/auth/auth.routes').then((c) => c.authRoutes),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
];

if (environment.production) {
  enableProdMode();
}

//Boostraping with standalone component
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes), HttpClientModule),
  ],
});

//Bootstraping with modules
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
