import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { TipoProductoService } from '../../services/tipo-producto.service';
import { Producto } from '../../models/producto.model';
import { TipoProducto } from '../../models/tipo-producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  productoForm: FormGroup;
  isEdit: boolean = false;
  isEditMode = false;
  productoId: number | null = null;
  tiposProducto: TipoProducto[] = [];

  constructor(
    private fb: FormBuilder, 
    private productoService: ProductoService,
    private tipoProductoService: TipoProductoService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      id: [null],
      idTipo: [null, Validators.required],
      descripcion: ['', Validators.required],
      valor: [null, [Validators.required, Validators.min(0)]],
      costo: [null, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadTiposProducto();
    // Logic to check if editing an existing product
    if (this.productoId) {
      this.isEdit = true;
      this.loadProducto(this.productoId);
    }
  }

  loadProducto(id: number): void {
    this.productoService.getProductoById(id).subscribe(producto => {
      this.productoForm.patchValue(producto);
    });
  }

  loadTiposProducto(): void {
    this.tipoProductoService.getTipoProductos().subscribe(
      (data: TipoProducto[]) => {
        this.tiposProducto = data;
      },
      (error: any) => {
        console.error('Error cargando tipos de producto', error);
      }
    );
  }

  onSubmit(): void {
    if (this.productoForm.valid) {
      const formValue = this.productoForm.value;
      if (this.isEdit && this.productoId) {
        this.productoService.updateProducto(this.productoId, formValue).subscribe(() => {
          this.router.navigate(['/producto']);
        });
      } else {
        // Remove id field when creating new product
        const { id, ...productoData } = formValue;
        this.productoService.createProducto(productoData).subscribe(
          () => {
            console.log('Producto creado exitosamente');
            this.router.navigate(['/producto']);
          },
          (error) => {
            console.error('Error al crear producto:', error);
          }
        );
      }
    }
  }
}