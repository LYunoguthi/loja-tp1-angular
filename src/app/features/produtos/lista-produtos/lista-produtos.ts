import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  produtos = <Produto[]>[
    {
      id: 1,
      nome: 'Mounjaro',
      preco: 1699,
      descricao: 'Canetas 1',
      imageUrl: 'images/mounjaro.jpg',
      promo: false,
    },
    {
      id: 2,
      nome: 'Ozempic',
      preco: 1299,
      descricao: 'Canetas 2',
      imageUrl: 'images/ozempic.jpg',
      promo: false,
    },
    {
      id: 3,
      nome: 'Wegovy',
      preco: 2500,
      descricao: 'Canetas 3',
      imageUrl: 'images/wegovy.jpg',
      promo: true,
    },
  ];

  onViewProduct(id: number){
    alert('Visualizando produto id ' +id);
  }

  onAddProduct(produto: {id: number, qtd: number}){
    alert('Adicionado produto '+produto.id+' | quantidade: '+produto.qtd)
  }

}
