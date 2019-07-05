import {EntityState} from '@ngrx/entity';

export interface Stock {
  symbol: string;
  price: string;
  volume: string;
  timestamp: string;
  createTimeStamp?: number;
  lastUpdate?: string;
}

export interface StocksState {
  refreshRate: number;
  stocks: StockState;
}

export interface StockState extends EntityState<Stock> {
}


