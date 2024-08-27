import { Routes } from '@angular/router';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { RecipesComponent } from './Components/recipes/recipes.component';

export const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    title: 'Recipes',
  },
  {
    path: 'shopping',
    component: ShoppingListComponent,
    title: 'Shopping',
  },
];
