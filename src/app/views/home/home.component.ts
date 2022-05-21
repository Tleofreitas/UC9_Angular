import { Component, OnInit } from '@angular/core';
import { Newsletter } from 'src/app/models/newsletter';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos = [] as Produtos[];

  constructor(private produtosServices: ProdutosService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtosServices.getProdutos().subscribe( (produtosRecebidos: Produtos[]) => {
      this.listaProdutos = produtosRecebidos
    })
  }

  newsModel = new Newsletter("")

  onSubmit() {
    console.log(this.newsModel)
  }

}
