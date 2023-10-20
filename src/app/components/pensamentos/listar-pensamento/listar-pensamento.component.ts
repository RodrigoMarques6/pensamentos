import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {

  // Utilizando ngFor:
  listaPensamentos = [
    // {
    //   conteudo: 'Passando informações para o componente filho',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo3'
    // },
    // {
    //   conteudo: 'Minha propriedade é decorada com @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo3'
    // }
  ]

  constructor() {}
  ngOnInit(): void {}
}
