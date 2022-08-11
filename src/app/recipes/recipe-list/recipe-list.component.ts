import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Tomato Soup',
      'Delicious Pomodoro...',
      'https://www.cubesnjuliennes.com/wp-content/uploads/2022/02/Homemade-Tomato-Soup-Recipe.jpg'
    ),
    new Recipe(
      'Blueberry Cake',
      'Sweet and sticky...',
      'https://sugarspunrun.com/wp-content/uploads/2022/03/lemon-blueberry-cake-1-of-1-2.jpg'
    ),
    new Recipe(
      'Sourdough Bread',
      'Like grandma always made it...',
      'https://www.abeautifulplate.com/wp-content/uploads/2020/02/artisan-sourdough-bread-recipe-1-34-500x500.jpg'
    ),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
