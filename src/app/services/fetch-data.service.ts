import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from '../models/producto.model';

@Injectable()
export class FetchDataService {
  productos: Observable<Producto[]>;
  producto: Observable<Producto>;

  private URL = 'http://localhost:8080/shmuebles/muebles';

  constructor(private httpClient: HttpClient) { }

  getResult(): Observable<Producto[]> {
    this.productos = this.httpClient.get<Producto[]>(this.URL);
    return this.productos;
  }

  getById(id: number): Observable<Producto> {
    this.producto = this.httpClient.get<Producto>(`${ this.URL }/${ id }`);
    return this.producto;
  }
}
