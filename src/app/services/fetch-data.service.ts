import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from '../models/producto.model';

@Injectable()
export class FetchDataService {
  private URL = 'https://shmuebles.herokuapp.com/shmuebles/muebles';

  public productos: Observable<Producto[]>;
  public producto: Observable<Producto>;
  public categoria: Observable<Producto[]>;

  constructor(private httpClient: HttpClient) { }

  public getResult(): Observable<Producto[]> {
    this.productos = this.httpClient.get<Producto[]>(this.URL);
    return this.productos;
  }

  public getById(id: number): Observable<Producto> {
    this.producto = this.httpClient.get<Producto>(`${ this.URL }/${ id }`);
    return this.producto;
  }

  public getByCategory(category: string): Observable<Producto[]> {
    this.categoria = this.httpClient.get<Producto[]>(`${ this.URL }/categorias/${ category }`);
    return this.categoria;
  }
}
