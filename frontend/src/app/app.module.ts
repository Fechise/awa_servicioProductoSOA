import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './components/producto/producto-list.component';
import { ProductoFormComponent } from './components/producto/producto-form.component';
import { ProductoDetailComponent } from './components/producto/producto-detail.component';
import { TipoProductoListComponent } from './components/tipo-producto/tipo-producto-list.component';
import { TipoProductoFormComponent } from './components/tipo-producto/tipo-producto-form.component';
import { TipoProductoDetailComponent } from './components/tipo-producto/tipo-producto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductoFormComponent,
    ProductoDetailComponent,
    TipoProductoListComponent,
    TipoProductoFormComponent,
    TipoProductoDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
