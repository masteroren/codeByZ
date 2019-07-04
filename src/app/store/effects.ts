import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Get, GetFailure, GetSuccess, StockActions} from './actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class StocksEffects {

  constructor(private http: HttpClient, private actions$: Actions) {
  }

  @Effect()
  getStocks$ = this.actions$
    .pipe(
      ofType<Get>(StockActions.GET),
      switchMap(action => {
        return this.http.get('https://www.alphavantage.co/query', {
          params: {
            function: 'BATCH_STOCK_QUOTES',
            symbols: action.payload,
            apikey: 'MJJOQ69Y676IMJWR',
          }
        })
          .pipe(
            map(res => new GetSuccess(res['Stock Quotes'])),
            catchError(err => of(new GetFailure()))
          );
      })
    );
}
