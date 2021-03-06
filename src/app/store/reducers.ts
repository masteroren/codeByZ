import {Stock, StocksState} from './index';
import {createEntityAdapter} from '@ngrx/entity';
import {StockActions} from './actions';

export const adapter = createEntityAdapter<Stock>({
  selectId: (model: Stock) => {
    return model['1. symbol'];
  },
});

const initialState: StocksState = {
  refreshRate: 30,
  stocks: adapter.getInitialState(),
};

export function stocksReducer(state: StocksState = initialState, action) {
  const newState = {...state};

  switch (action.type) {
    case StockActions.ADD:
      newState.stocks = adapter.addOne(action.payload, newState.stocks);
      return newState;
    case StockActions.GET_SUCCESS:
      newState.stocks = adapter.upsertMany(action.payload, newState.stocks);
      return newState;
    case StockActions.REMOVE:
      newState.stocks = adapter.removeOne(action.payload, newState.stocks);
      return newState;
    case StockActions.UPDATE_REFRESH_RATE:
      newState.refreshRate = action.payload;
      return newState;
    default:
      return newState;
  }
}
