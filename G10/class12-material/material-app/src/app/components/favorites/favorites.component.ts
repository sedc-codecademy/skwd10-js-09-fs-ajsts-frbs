import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoriteThings = ['Games'];

  favoritesForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.favoritesForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.favoriteThings.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(thing: string): void {
    const index = this.favoriteThings.indexOf(thing);

    if (index >= 0) {
      this.favoriteThings.splice(index, 1);
    }
  }

  onFormSubmit() {
    if (this.favoriteThings.length > 0) {
      console.log({
        fullName: this.favoritesForm.value.fullName,
        favoriteThings: this.favoriteThings,
      });
    }
  }
}
