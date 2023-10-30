import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  // ProvidedIn significa "provedor", isto é, ele pode ser utilizado em todas as partes da aplicação, tendo em vista que seu valor está como "root".
})
export class PensamentoService {
  private readonly url = 'http://localhost:3000/pensamentos';

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.httpClient.get<Pensamento[]>(this.url);
  }

  // Explicando: O método listar() é um observable que vai retornar uma lista de pensamentos.

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.post<Pensamento>(this.url, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.url}/${id}`;
    return this.httpClient.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<Pensamento>(url)
  }
}
