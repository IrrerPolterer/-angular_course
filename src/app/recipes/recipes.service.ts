import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tomato Soup',
      'Delicious Pomodoro...',
      'https://www.cubesnjuliennes.com/wp-content/uploads/2022/02/Homemade-Tomato-Soup-Recipe.jpg',
      [
        new Ingredient('Tomatos', 5),
        new Ingredient('Salt', 1),
        new Ingredient('Basil', 3),
      ]
    ),
    new Recipe(
      'Blueberry Cake',
      'Sweet and sticky...',
      'https://sugarspunrun.com/wp-content/uploads/2022/03/lemon-blueberry-cake-1-of-1-2.jpg',
      [
        new Ingredient('Blueberries', 20),
        new Ingredient('Cream', 2),
        new Ingredient('Flour', 5),
        new Ingredient('Eggs', 2),
      ]
    ),
    new Recipe(
      'Sourdough Bread',
      'Like grandma always made it...',
      'https://www.abeautifulplate.com/wp-content/uploads/2020/02/artisan-sourdough-bread-recipe-1-34-500x500.jpg',
      [new Ingredient('Flour', 3), new Ingredient('Water', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); // return deep copy, prevent direct access to the stored array
  }
}
