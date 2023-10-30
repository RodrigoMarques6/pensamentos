import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.interface';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  // Utilizando ngFor:
  listaPensamentos: Pensamento[] = [];

  // Após a criação do método listar(), no service, vamos consumir este serviço agora no constructor, injetando o PensamentoService:
  // Após a injeção do service, poderei ter acesso a todos os métodos utilizados no service. 

  constructor(private service: PensamentoService) {}

  // Injetamos o pensamento service acima, no constructor para conseguir consumir.
  // Queremos que essa lógica seja executada assim que o componente for carregado. Para isto, utilizamos o ngOnInit.

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}

// Com o método subscribe, o observable vai entender que é necessário emitir notificações toda vez que houver uma mudança.