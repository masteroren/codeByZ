import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StocksState} from './index';
import {adapter} from './reducers';

const {
  selectAll
} = adapter.getSelectors();

export const getStocksState = createFeatureSelector<StocksState>('stocks');
export const getEntities = createSelector(getStocksState, state => state.stocks);
export const getStocks = createSelector(getEntities, selectAll);
export const getIds = createSelector(getEntities, state => state.ids);
export const getRefreshRate = createSelector(getStocksState, state => state.refreshRate);


