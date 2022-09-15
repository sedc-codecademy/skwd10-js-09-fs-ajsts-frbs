import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // loggedInUser: User | null;
  currentUser: User | null;

  constructor(
    private movieService: MoviesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe({
      next: (value) => {
        console.log(value);
        this.currentUser = value;
      },
    });
  }

  onLogout() {
    this.authService.logoutUser();
  }
}
