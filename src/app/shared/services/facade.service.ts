import {Injectable} from '@angular/core';
import {Stock, StockState} from '../../store';
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
        // console.log(this.refreshRate)
        //
        // if (this.refreshRate === 0) {
        //   this.stopPolling();
        // } else {
        this.restartPolling();
        // }
      });
  }

  startPolling() {
    this.polingSubscription$ = interval(this.refreshRate * 1000)
      .subscribe(() => {
        this.getStocksIds();
      });
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

  addStock(stockName: string) {
    this.store.dispatch(new Add({
      '1. symbol': stockName,
      createTimeStamp: Date.now(),
    }));
  }

  getStocksIds() {
    if (this.refreshRate === 0) {
      return;
    }

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
    const currentTime = Date.now();

    return this.store
      .pipe(
        select(getStocks),
        map((stocks: Stock[]) => {
          stocks.forEach((stock: Stock) => {
            const diff = new Date(currentTime - stock.createTimeStamp);
            const seconds = diff.getSeconds();
            const minutes = diff.getMinutes();
            const hours = diff.getHours() + (diff.getTimezoneOffset() / 60);
            if (hours > 0) {
              stock.lastUpdate = `Updated ${hours} hours ago`;
            } else if (minutes > 0) {
              stock.lastUpdate = `Updated ${minutes} minutes ago`;
            } else if (seconds > 0) {
              stock.lastUpdate = `Updated a few seconds ago`;
            }
          });
          return stocks;
        }),
        take(1),
      );
  }

  removeStock(stockSymbol) {
    this.store.dispatch(new Remove(stockSymbol));
  }

  updateRefreshRate(refreshRate: number) {
    if (typeof (refreshRate) === 'number') {
      this.store.dispatch(new UpdateRefreshRate(refreshRate));
    }
  }

  getRefreshRate() {
    return this.store
      .pipe(
        select(getRefreshRate),
        // take(1),
      );
  }
}
