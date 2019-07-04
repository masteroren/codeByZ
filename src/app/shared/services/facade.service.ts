import {Injectable} from '@angular/core';
import {StockState} from '../../store';
import {select, Store} from '@ngrx/store';
import {Add, Get, Remove, UpdateRefreshRate} from '../../store/actions';
import {getIds, getRefreshRate, getStocks} from '../../store/selectors';
import {debounceTime, filter, map, take, tap} from 'rxjs/operators';
import {interval, Subscription} from 'rxjs';

@Injectable()
export class StockFacadeService {

  private polingSubscription$: Subscription;
  private refreshRate: number;

  constructor(private store: Store<StockState>) {
    this.getRefreshRate()
      .pipe(
        debounceTime(300),
      )
      .subscribe(value => {
        this.refreshRate = value;
        this.restartPolling();
      });
  }

  startPolling() {
    if (this.refreshRate !== 0) {
      this.polingSubscription$ = interval(this.refreshRate * 1000)
        .subscribe(() => {
          this.getStocksIds();
        });
    }
  }

  stopPolling() {
    if (this.polingSubscription$) {
      this.polingSubscription$.unsubscribe();
    }
  }

  restartPolling() {
    this.stopPolling();
    this.startPolling();
  }

  addStock(stock: string) {
    this.store.dispatch(new Add({'1. symbol': stock}));
  }

  getStocksIds() {
    this.store
      .pipe(
        select(getIds),
        filter(ids => !!ids.length),
        map(ids => {
          return ids.join(',');
        }),
        take(1),
      )
      .subscribe(ids => {
        this.store.dispatch(new Get(ids));
      });
  }

  getAll() {
    return this.store
      .pipe(
        select(getStocks),
        take(1),
      );
  }

  removeStock(stockSymbol) {
    this.store.dispatch(new Remove(stockSymbol));
  }

  updateRefreshRate(refreshRate: number) {
    this.store.dispatch(new UpdateRefreshRate(refreshRate));
  }

  getRefreshRate() {
    return this.store
      .pipe(
        select(getRefreshRate),
      );
  }
}
