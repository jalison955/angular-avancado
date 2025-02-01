import { Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';

export const routes: Routes = [
  { path: 'categorias', component: CategoriesComponent },
  { path: 'categoria/novo', component: CategoryComponent },
  { path: 'categoria/:id/editar', component: CategoryComponent },
];
