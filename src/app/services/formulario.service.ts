import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Consulta } from '../models/consulta.model';
import { Observable } from 'rxjs';

@Injectable()
export class FormularioService {
  private URL = 'https://shmuebles.herokuapp.com/contacto/formulario';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) {}

  public sendForm(consulta: Consulta): Observable<Consulta[]> {
    return this.httpClient.post<Consulta[]>(this.URL, consulta, { headers: this.httpHeaders });
  }

}
