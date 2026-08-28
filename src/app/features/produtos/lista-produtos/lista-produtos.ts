import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  apenasPromo = signal(false);

  produtosExibidos = computed(() =>
  this.apenasPromo() ? this.produtos.filter(p => p.promo)
  : this.produtos);

  alternarPromo(){
    this.apenasPromo.update(v =>!v);
  }

  produtos = <Produto[]>[
    {
      id: 1,
      nome: 'Mounjaro',
      preco: 1699,
      descricao: 'Canetas 1',
      imageUrl: 'images/mounjaro.jpg',
      promo: false,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Ozempic',
      preco: 1299,
      descricao: 'Canetas 2',
      imageUrl: 'images/ozempic.jpg',
      promo: false,
      estado: 'usado'
    },
    {
      id: 3,
      nome: 'Wegovy',
      preco: 2500,
      descricao: 'Canetas 3',
      imageUrl: 'images/wegovy.jpg',
      promo: true,
      estado: 'novo'
    },
  ];

  onViewProduct(id: number){
    alert('Visualizando produto id ' +id);
  }

  onAddProduct(produto: {id: number, qtd: number}){
    alert('Adicionado produto '+produto.id+' | quantidade: '+produto.qtd)
  }

}
