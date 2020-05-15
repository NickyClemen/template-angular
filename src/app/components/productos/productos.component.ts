import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { Producto } from '../../models/producto.model';

import { ActivatedRoute } from '@angular/router';

import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public productos: Producto[] = [];
  public categoria: string;

  constructor(private xhr: FetchDataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(response => {
        this.categoria = response.get('categoria');

        this.xhr.getByCategory(this.categoria)
          .subscribe(producto => {

            HelpersService.cleanArray(this.productos);

            for(let key in producto) {
              if(producto[key] !== null) {
                this.productos.push(producto[key]);
              }
            }
            
            return this.productos;
          });
      });

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
  }
}
