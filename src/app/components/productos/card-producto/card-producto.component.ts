import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FetchDataService } from '../../../services/fetch-data.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  public productos: string[] = [];

  constructor(private routes: Router, private xhr: FetchDataService) { }

  ngOnInit() {
    this.xhr.getResult()
      .subscribe(
        response => {
          for(const key in response) {
            if(response[key] !== '') {
              this.productos.push(response[key]);
            }
          }
          return this.productos;
        },
        error => console.error(error.message)
      );
  }

  redirect() {
    this.routes.navigate(['/producto']);
  }
}
