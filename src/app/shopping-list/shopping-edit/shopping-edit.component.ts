import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAdd() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.nameRef.nativeElement.value,
        this.amountRef.nativeElement.value
      )
    );
  }
}
