import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'observables',
    component: ObservablesComponent,
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
  },
  {
    path: 'operators',
    component: OperatorsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    OperatorsComponent,
    ObservablesComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
