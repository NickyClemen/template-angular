import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  public categorias: string[] = ['Living', 'Dormitorio', 'Cocina Comedor', 'Escritorios'];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
}
