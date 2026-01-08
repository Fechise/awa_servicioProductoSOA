import { Component, OnInit } from '@angular/core';
import { TipoProductoService } from '../../services/tipo-producto.service';
import { TipoProducto } from '../../models/tipo-producto.model';

@Component({
  selector: 'app-tipo-producto-list',
  templateUrl: './tipo-producto-list.component.html',
  styleUrls: ['./tipo-producto-list.component.css']
})
export class TipoProductoListComponent implements OnInit {
  tipoProductos: TipoProducto[] = [];

  constructor(private tipoProductoService: TipoProductoService) {}

  ngOnInit(): void {
    this.loadTipoProductos();
  }

  loadTipoProductos(): void {
    this.tipoProductoService.getTipoProductos().subscribe(
      (data: TipoProducto[]) => {
        this.tipoProductos = data;
      },
      (error: any) => {
        console.error('Error fetching tipo productos', error);
      }
    );
  }

  deleteTipoProducto(id: number): void {
    if (!confirm('¿Está seguro de eliminar este tipo de producto?')) {
      return;
    }
    
    this.tipoProductoService.deleteTipoProducto(id).subscribe(
      () => {
        this.tipoProductos = this.tipoProductos.filter(tp => tp.id !== id);
        alert('Tipo de producto eliminado exitosamente');
      },
      (error: any) => {
        console.error('Error deleting tipo producto', error);
        if (error.error && error.error.message) {
          alert(error.error.message);
        } else {
          alert('No se puede eliminar este tipo de producto porque tiene productos asociados.');
        }
      }
    );
  }
}