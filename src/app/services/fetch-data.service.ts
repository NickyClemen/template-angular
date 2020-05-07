import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchDataService {

  private URL = 'http://localhost:8080/shmuebles/muebles';

  constructor(private httpClient: HttpClient) { }

  getResult() {
    return this.httpClient.get(this.URL);
  }
}
