import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FetchDataService } from '../../../services/fetch-data.service';

import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  public productos: Producto[] = [];

  constructor(private routes: Router, private xhr: FetchDataService) { }

  ngOnInit() {
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

  redirect(id) {
    this.routes.navigate(['productos', id]);
  }
}
