import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  totalLikes = 0;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.likesEmitter.subscribe(
      (likes) => (this.totalLikes = likes)
    );
  }
}
