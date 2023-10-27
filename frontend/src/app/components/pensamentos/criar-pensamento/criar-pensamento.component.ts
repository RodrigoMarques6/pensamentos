import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.interface';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {

  // Utilizamos abaixo o decorator @input() para avisar que agora este componente vai receber informações do componente pai.
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Estudando Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Pensamento criado')
  }

  cancelar() {
    alert('Pensamento cancelado')
  }

}
