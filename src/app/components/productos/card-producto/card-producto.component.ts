import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {
  @Input('productos')
  public productos: Producto[] = [];
  constructor(private routes: Router) {}

  ngOnInit() {}

  redirect(id) {
    this.routes.navigate(['productos', id]);
  }
}
