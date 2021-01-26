import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Clientes, ClientesApi } from './models/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  retornaClientes(): Observable<Clientes> {
    return this.http
      .get<ClientesApi>('http://localhost:3000/clientes')
      .pipe(map((api)=> api.items));
  }
}
