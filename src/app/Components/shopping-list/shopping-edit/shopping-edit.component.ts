import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Ingredents } from '../../../Models/ingredents';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss',
})
export class ShoppingEditComponent {
  ingredientForm: FormGroup;
  @Output() ingredientAdded = new EventEmitter<Ingredents>();
  constructor(private formBuilder: FormBuilder) {
    this.ingredientForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      amount: [
        null,
        [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)],
      ],
    });
  }

  get name() {
    return this.ingredientForm.get('name');
  }

  get amount() {
    return this.ingredientForm.get('amount');
  }

  addIngredient() {
    const newIngredient: Ingredents = this.ingredientForm.value;
    this.ingredientAdded.emit(newIngredient);
  }
}
