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

  // Vamos consumir o serviço criado agora no constructor:

  constructor(private service: PensamentoService) {}

  // Injetamos o pensamento service acima, no constructor para conseguir consumir.

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}

// Com o método subscribe, o observable vai entender que é necessário emitir notificações toda vez que houver uma mudança.