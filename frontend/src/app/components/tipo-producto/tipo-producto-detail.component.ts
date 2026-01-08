import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoProductoService } from '../../services/tipo-producto.service';
import { TipoProducto } from '../../models/tipo-producto.model';

@Component({
  selector: 'app-tipo-producto-detail',
  templateUrl: './tipo-producto-detail.component.html',
  styleUrls: ['./tipo-producto-detail.component.css']
})
export class TipoProductoDetailComponent implements OnInit {
  tipoProducto: TipoProducto | undefined;

  constructor(
    private route: ActivatedRoute,
    private tipoProductoService: TipoProductoService
  ) {}

  ngOnInit(): void {
    this.getTipoProducto();
  }

  getTipoProducto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tipoProductoService.getTipoProductoById(id).subscribe((tipoProducto: TipoProducto) => {
      this.tipoProducto = tipoProducto;
    });
  }
}