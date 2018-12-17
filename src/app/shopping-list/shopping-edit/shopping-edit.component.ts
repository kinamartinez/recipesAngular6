import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() addNewIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredientName = this.nameInput.nativeElement.value;
    const newIngredientAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount);
    this.addNewIngredient.emit(newIngredient);
  }
}
