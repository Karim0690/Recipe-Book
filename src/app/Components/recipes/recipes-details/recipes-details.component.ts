import { Component } from '@angular/core';
import { Recipes } from '../../../Models/recipes';

@Component({
  selector: 'app-recipes-details',
  standalone: true,
  imports: [],
  templateUrl: './recipes-details.component.html',
  styleUrl: './recipes-details.component.scss',
})
export class RecipesDetailsComponent {
  recipe: Recipes[] = [
    new Recipes(
      'Mash Potatto',
      'New Discription of this recipes',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9aAd5BIxeGUIprcMW_0jekZFxJGdB1EmVA&s'
    ),
    new Recipes(
      'Scrscrambled eggs',
      'New Discription of this recipes',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7QrKLJJUb_YoXCoukPWANJugYErndlUI-Q&s'
    ),
  ];
}
