import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";
import { ProdutoComponent } from "./pages/produto/produto.component";

//iniciar o roteamento
//Precisamos importar o modulo de roteamento

// Falta declarar rota rota -> componente
//variavel para guardar essa declaracao

// a constante rotas é reponsavel por armazenar os caminhos, as rotas que existem dentro do site. Vamos ter uma lista, entao um array . [] Cada item do array de rotas e uma nova rota que foi declarada. 

const rotas: Routes = [
{
    // http://localhost:4200
    path:'' //String vazia significa a rota principal   // caminho para acessar a rota.
    redirectTo: 'produtos',
    pathMatch: 'full' //redireciona o usuario para outra no momento que ele entrar nessa rota
    component: ListarProdutosComponent
    //cada objeto é uma rota
},
{   // http://localhost:4200/produtos
    path: 'produtos',
    component: ListarProdutosComponent
},
{
    path: 'produtos/:idProduto' //rota com parametro idProduto
    component: ProdutoComponent
}
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(rotas) //módulo que inicia o roteamento e carrega as rotas que estão dentro do array. For root é uma funcao que serve para a gente passar p o modulo 
    ],
    providers: [],
    exports: [
        RouterModule
        //exportando o modulo após as rotas terem sido carregadas dentro dele. 
    ]
}) //decorator
export class AppRoutingModule {}

//depois de tdo configurado eu tenho q ir p o app.module. Em um modulo especifico eu faco as roptas e depois eu preciso importar dentro do modulo principal. Tudo no arquivo q esta aqui é exclusivamente do roteamento e depois eu jogo p o modulo principal. o appModule.