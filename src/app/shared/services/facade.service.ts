import {Injectable} from '@angular/core';
import {StockState} from '../../store';
import {select, Store} from '@ngrx/store';
import {Add, Get, Remove} from '../../store/actions';
import {getIds, getStocks} from '../../store/selectors';
import {map, take, tap} from 'rxjs/operators';

@Injectable()
export class StockFacadeService {

  constructor(private store: Store<StockState>) {
  }

  addStock(stock: string) {
    this.store.dispatch(new Add({'1. symbol': stock}));
  }

  getStocks() {
    this.store
      .pipe(
        select(getIds),
        map(ids => {
          return ids.join(',');
        }),
        take(1),
      )
      .subscribe(stocks => {
        this.store.dispatch(new Get(stocks));
      });
  }

  getAll() {
    return this.store
      .pipe(
        select(getStocks),
        tap(console.log),
        take(1),
      );
  }

  removeStock(stock) {
    this.store.dispatch(new Remove(stock));
  }
}
