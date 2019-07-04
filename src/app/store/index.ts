import {EntityState} from '@ngrx/entity';

export interface Stock {
  symbol: string;
  price: string;
  volume: string;
  timeStamp: string;
}

export interface StocksState {
  stocks: StockState;
}

export interface StockState extends EntityState<Stock> {
}


