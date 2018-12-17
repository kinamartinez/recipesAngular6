import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Input;
  ingredients: Ingredient[] = [
    new Ingredient ('Peper', 100),
    new Ingredient ('Chicken', 1)
  ];

  constructor() {
  }

  ngOnInit() {
  }
  newIngredientAdded(event) {
    this.ingredients.push(event);
  }
}
