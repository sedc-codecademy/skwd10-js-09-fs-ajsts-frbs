import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-services';
  public totalLikes: number = 0;

  constructor(private loggerService: LoggerService) {}

  ngOnInit() {
    this.loggerService.logTimeFromComponent('App Component');
  }
}
