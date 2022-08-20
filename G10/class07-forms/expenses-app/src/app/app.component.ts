import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'expenses-app';

  showTemplateForm: boolean = false;

  toggleForms() {
    this.showTemplateForm = !this.showTemplateForm;
  }
}
