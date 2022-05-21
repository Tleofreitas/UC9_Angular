import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  // Variável criada para armazenar o endereço da API
  url="http://localhost:3000/produtos";

  // Insere a dependencia HttpClient
  constructor(private httpClient: HttpClient) { }

  // Variável que armazena as configurações dos Headers de requisição
  httpOptions = {
    headers: new HttpHeaders({ 'content-typ': 'application/json'})
  }
  
  // Método GET, que vai trazer as notícias da API
  getProdutos(): Observable<Produtos[]> {
    return this.httpClient.get<Produtos[]>(this.url)
  }
}
