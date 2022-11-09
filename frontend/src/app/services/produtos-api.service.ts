import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {

  private readonly baseUrl: string = 'http://localhost:3000/produtos'
  
  constructor(
    private http: HttpClient 
  ) { }
  //Listar informacoes -> GET
  listarProdutos(){
    return this.http.get<Array<Produto>>
  }
}
