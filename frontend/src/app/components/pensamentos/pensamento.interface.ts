export interface Pensamento {
  id: number,
  conteudo: string,
  autoria: string,
  modelo: string,
}

// Interfaces tem o objeto de padronizar tanto o código, quanto os dados advindos do front end para serem armazenados no banco.
// Lembrar que é como se fosse um contrato e precisa ser respeitado tando pelo front quanto pelo back.