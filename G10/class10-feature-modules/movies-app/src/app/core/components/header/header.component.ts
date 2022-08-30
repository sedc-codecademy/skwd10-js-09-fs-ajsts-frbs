import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser: User | null;

  constructor(
    private moviesService: MoviesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(
      (value) => (this.currentUser = value)
    );
  }

  onLogout() {
    this.authService.logoutUser();
  }
}
