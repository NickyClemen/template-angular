import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.routes.navigate(['/producto']);
  }
}
