import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Producto } from '../../models/producto.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnChanges {
  public productos: Producto[] = [];
  public productosCategoria: Producto[] = [];
  public categoria: string;

  constructor(private xhr: FetchDataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(response => this.categoria = response.get('categoria'));

    this.xhr.getResult()
      .subscribe(
        response => {
          for(let key in response) {
            if(response[key] !== null) {
              this.productos.push(response[key]);
            }
          }

          return this.productos;
        },
        error => console.error(error.message)
      );

    if(this.categoria !== '') {
      this.findByCategory(this.categoria);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.categoria.currentValue) {
      this.findByCategory(this.categoria);
    }
  }

  public findByCategory(category: string) {
    this.xhr.getByCategory(category)
      .subscribe(producto => {
        for(let key in producto) {
          if(producto[key] !== null) {
            this.productosCategoria.push(producto[key]);
          }
        }
        
        return this.productosCategoria;
      });
  }
}
