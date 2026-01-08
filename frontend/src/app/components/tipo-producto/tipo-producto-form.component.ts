import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoProductoService } from '../../services/tipo-producto.service';
import { TipoProducto } from '../../models/tipo-producto.model';

@Component({
  selector: 'app-tipo-producto-form',
  templateUrl: './tipo-producto-form.component.html',
  styleUrls: ['./tipo-producto-form.component.css']
})
export class TipoProductoFormComponent implements OnInit {
  tipoProductoForm: FormGroup;
  isEditMode = false;

  constructor(private formBuilder: FormBuilder, private tipoProductoService: TipoProductoService) {
    this.tipoProductoForm = this.formBuilder.group({
      tipo: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.tipoProductoForm.valid) {
      const tipoProducto: TipoProducto = this.tipoProductoForm.value;
      this.tipoProductoService.createTipoProducto(tipoProducto).subscribe(response => {
        console.log('Tipo de Producto creado:', response);
        this.tipoProductoForm.reset();
      });
    }
  }
}