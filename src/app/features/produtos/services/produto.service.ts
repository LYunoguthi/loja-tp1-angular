import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService);

  private readonly listaMock = <Produto[]>[
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

  listar(): Observable<Produto[]>{
    this.logger.info("[PRODUTO SERVICE] - Retornando lista de produtos")
    return of(this.listaMock).pipe(
      delay(250)
    );
  }

  getById(id: number): Observable<Produto | undefined> {
    this.logger.info(`[PRODUTO SERVICE] - Buscando produto id=${id}`);
    return of(this.listaMock.find(p => p.id === id)).pipe(
      delay(250)
    );
  }

}