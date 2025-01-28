import { Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';

export const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'category', component: CategoryComponent },
];
