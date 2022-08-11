import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', { static: false }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountRef: ElementRef;

  onAdd() {
    this.addIngredient.emit(
      new Ingredient(
        this.nameRef.nativeElement.value,
        this.amountRef.nativeElement.value
      )
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
