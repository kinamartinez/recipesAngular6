import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('A test recipe TITLE', 'Description blah blah', 'http://images.media-allrecipes.com/userphotos/250x250/2160152.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }
  recetaSeleccionada(receta) {
this.recipeWasSelected.emit(receta)
  }
}
