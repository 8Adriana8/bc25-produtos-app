import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  //injetar um objeto que permite o acesso aos parametros da rota
  
  constructor(
    private rota: ActivatedRoute //permite acessar as informacoes(parametros) da rota que esta ativa no momento

  ) { }

  ngOnInit(): void { //é executado quando o componente é renderizado
  //paramMap é um objeto que possui acesso a todos os parametros da rota atual
  //get funciona para recuperar o valor de um para,etro da rota atual  
  const idProduto = this.rota.snapshot.paramMap.get('idProduto') // metodo get vai retornar sempre ou uma string ou valor nulo
console.log(idProduto)  
}

}
