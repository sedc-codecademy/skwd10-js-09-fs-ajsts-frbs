import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-forms';
  public showTemplateForms: boolean = false;

  onToggleForm() {
    this.showTemplateForms = !this.showTemplateForms;
  }
}
