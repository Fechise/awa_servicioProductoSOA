import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProducto } from '../models/tipo-producto.model';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  private apiUrl = 'http://localhost:5000/api/tipoproducto'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getTipoProductos(): Observable<TipoProducto[]> {
    return this.http.get<TipoProducto[]>(this.apiUrl);
  }

  getTipoProductoById(id: number): Observable<TipoProducto> {
    return this.http.get<TipoProducto>(`${this.apiUrl}/${id}`);
  }

  createTipoProducto(tipoProducto: TipoProducto): Observable<TipoProducto> {
    return this.http.post<TipoProducto>(this.apiUrl, tipoProducto);
  }

  updateTipoProducto(tipoProducto: TipoProducto): Observable<TipoProducto> {
    return this.http.put<TipoProducto>(`${this.apiUrl}/${tipoProducto.id}`, tipoProducto);
  }

  deleteTipoProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}