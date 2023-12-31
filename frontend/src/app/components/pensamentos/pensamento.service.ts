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
  // readonly significa que posso atribuir um valor a uma propriedade em sua inicialização e esta não poderá ser modificada posteriormente. Em resumo, utilizamos com o intuito de após iniciar, não modificar mais.

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.httpClient.get<Pensamento[]>(this.url);
  }

  // Explicando: O método listar() é um observable que vai retornar uma lista de pensamentos.
  // Após criação do método listar(), vamos no componente de listagem para consumir este serviço criado

  // Agora vamos adicionar um método para a criação de um pensamento:

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpClient.post<Pensamento>(this.url, pensamento);
  }

  // Após o método de criar pensamento acima, vamos no componente de criar pensamento para consumir este serviço

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.url}/${pensamento.id}`
    return this.httpClient.put<Pensamento>(url, pensamento)
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
