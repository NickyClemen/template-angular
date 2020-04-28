import { Component, OnInit } from '@angular/core';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
