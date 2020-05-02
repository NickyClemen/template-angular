import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchDataService {

  private URL = '../../assets/object/muebles.json';

  constructor(private httpClient: HttpClient) { }

  getResult() {
    return this.httpClient.get(this.URL);
  }
}
