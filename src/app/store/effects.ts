import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Add, AddSuccess, Get, GetFailure, GetSuccess, Remove, RemoveSuccess, StockActions} from './actions';
import {catchError, filter, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {StockFacadeService} from '../shared/services/facade.service';

@Injectable()
export class StocksEffects {

  constructor(private http: HttpClient, private actions$: Actions, private stocksFacade: StockFacadeService) {
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
            map(res => {
              if (res['Stock Quotes']) {
                return new GetSuccess(res['Stock Quotes']);
              } else {
                return new GetFailure('Maximum allowed calls excided');
              }
            }),
            catchError(err => of(new GetFailure('*** The API server seems to be down :-('))),
          );
      })
    );

  @Effect()
  addStock$ = this.actions$
    .pipe(
      ofType<Add>(StockActions.ADD),
      tap(() => this.stocksFacade.stopPolling()),
      map(action => new AddSuccess(action.payload)),
      tap(() => this.stocksFacade.startPolling()),
    );

  @Effect()
  removeStock$ = this.actions$
    .pipe(
      ofType<Remove>(StockActions.REMOVE),
      tap(() => this.stocksFacade.stopPolling()),
      map(action => new RemoveSuccess(action.payload)),
      tap(() => this.stocksFacade.startPolling()),
    );
}
