import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-favorite-things',
  templateUrl: './favorite-things.component.html',
  styleUrls: ['./favorite-things.component.scss'],
})
export class FavoriteThingsComponent implements OnInit {
  constructor() {}
  favoriteThings: string[] = ['Games'];
  chipSelectable: boolean = true;
  chipRemovable: boolean = true;

  chipsForm: FormGroup;

  ngOnInit(): void {
    this.chipsForm = new FormGroup({
      fullName: new FormControl(''),
      favoriteThings: new FormControl(''),
    });
  }

  addNewThing(event: MatChipInputEvent) {
    const value = event.value;
    if (value) {
      this.favoriteThings.push(value);
      this.chipsForm.controls['favoriteThings'].reset();
    }
  }

  onRemoveThing(favoriteThing: any) {
    if (favoriteThing) {
      this.favoriteThings.splice(favoriteThing, 1);
    }
  }
}
