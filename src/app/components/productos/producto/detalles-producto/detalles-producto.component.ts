import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {
  producto: Producto = {
    id: 0,
    nombre: '',
    categoria: '',
    subCategoria: '',
    precio: 0,
    ancho: 0,
    alto: 0,
    profundo: 0,
    otrasMedidas: '',
    material: '',
    colores: '',
    colorAdicional: '',
    descripcion: '',
    aPedido: ''
  };

  public id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private fetchData: FetchDataService) {
  }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.fetchData.getById(this.id).subscribe(
      producto => {
        this.producto = producto;
        return this.producto;
      }
    );
  }
}
