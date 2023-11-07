import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.interface';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  // Utilizamos abaixo o decorator @input() para avisar que agora este componente vai receber informações do componente pai.

  formulario!: FormGroup;

  // Utilizamos o constructor para injetar o serviço a ser consumido, e ainda injetar as rotas para utilizar nos métodos criarPensamento() e cancelar()

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['Modelo2'],
    });
  }

  criarPensamento() {
    // Parte da validação do formulário de acordo com os Validators:
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe();
      // Relembrando que o subscribe é um método que fica aguardando uma resposta para avisar assim que obver
      this.router.navigate(['/listarPensamento']);
    } else {
      alert('Favor preencher todos os campos!');
    }
  }

  cancelar() {
    this.router.navigate(['listarPensamento']);
  }
}
