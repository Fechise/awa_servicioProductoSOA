import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './components/producto/producto-list.component';
import { ProductoFormComponent } from './components/producto/producto-form.component';
import { ProductoDetailComponent } from './components/producto/producto-detail.component';
import { TipoProductoListComponent } from './components/tipo-producto/tipo-producto-list.component';
import { TipoProductoFormComponent } from './components/tipo-producto/tipo-producto-form.component';
import { TipoProductoDetailComponent } from './components/tipo-producto/tipo-producto-detail.component';

const routes: Routes = [
  { path: 'producto', component: ProductoListComponent },
  { path: 'producto/new', component: ProductoFormComponent },
  { path: 'producto/edit/:id', component: ProductoFormComponent },
  { path: 'producto/:id', component: ProductoDetailComponent },
  { path: 'tipo-producto', component: TipoProductoListComponent },
  { path: 'tipo-producto/new', component: TipoProductoFormComponent },
  { path: 'tipo-producto/edit/:id', component: TipoProductoFormComponent },
  { path: 'tipo-producto/:id', component: TipoProductoDetailComponent },
  { path: '', redirectTo: '/producto', pathMatch: 'full' },
  { path: '**', redirectTo: '/producto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }