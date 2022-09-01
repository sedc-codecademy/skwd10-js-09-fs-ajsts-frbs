import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './app/components/home/home.component';
import { NotFoundComponent } from './app/components/not-found/not-found.component';

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// Can also be declared in a separate file
export const routes: Routes = [
  // { path: '', component: HomeComponent, title: 'Home Page' },
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
    title: 'Page Not Found',
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));

// platformBrowserDynamic()
// .bootstrapModule(AppModule)
// .catch(err => console.error(err));
