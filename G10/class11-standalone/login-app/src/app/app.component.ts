import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //All standalone components must have this flag set to true
  imports: [HeaderComponent, RouterModule],
  standalone: true,
})
export class AppComponent {
  title = 'login-app';
}
