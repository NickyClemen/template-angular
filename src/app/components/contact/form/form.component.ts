import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../../services/formulario.service';
import { Router } from '@angular/router';

import { Consulta } from '../../../models/consulta.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public formulario = new Consulta();

  constructor(private formularioService: FormularioService, private route: Router) { }

  ngOnInit() {}

  public sendForm(): void {
    this.formularioService.sendForm(this.formulario)
      .subscribe(
          consulta => {
            this.route.navigate(['/']);
            Swal.fire({
              icon: 'success',
              title: 'Su consulta ha sido cargada con éxito',
              text: 'Muchas gracias por contactarnos. Nos estaremos comunicando a la brevedad.',
            });
          }
      );
  }

}
