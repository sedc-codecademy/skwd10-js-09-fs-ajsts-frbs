import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  totalLikes: number;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.totalLikes = this.moviesService.getInitialLikes();

    this.moviesService.likesEmitter.subscribe((value: number) => {
      this.totalLikes = value;
    });
  }
}
