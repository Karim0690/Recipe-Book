import { Component } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredents } from '../../Models/ingredents';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent {
  ingredents: Ingredents[] = [
    new Ingredents('Apples', 5),
    new Ingredents('Tomateos', 10),
  ];

  onIngredientAdded(ingredent: Ingredents) {
    this.ingredents.push(ingredent);
  }
}
