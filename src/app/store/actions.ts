import {Action} from '@ngrx/store';

export enum StockActions {
  GET = '[stocks] Get stocks',
  GET_SUCCESS = '[stocks] Get stocks success',
  GET_FAILURE = '[stocks] Get stocks failure',

  ADD = '[stocks] add new stock',
  ADD_SUCCESS = '[stocks] add new stock success',

  REMOVE = '[stocks] remove stock from list',
  REMOVE_SUCCESS = '[stocks] remove stock from list success',

  UPDATE_REFRESH_RATE = '[stocks] update refresh rate',
}

export class Add implements Action {
  readonly type = StockActions.ADD;

  constructor(public payload: any) {
  }
}

export class AddSuccess implements Action {
  readonly type = StockActions.ADD_SUCCESS;

  constructor(public payload: any) {
  }
}

export class Remove implements Action {
  readonly type = StockActions.REMOVE;

  constructor(public payload: any) {
  }
}

export class RemoveSuccess implements Action {
  readonly type = StockActions.REMOVE_SUCCESS;

  constructor(public payload: any) {
  }
}

export class Get implements Action {
  readonly type = StockActions.GET;

  constructor(public payload: any) {
  }
}

export class GetSuccess implements Action {
  readonly type = StockActions.GET_SUCCESS;

  constructor(public payload: any) {
  }
}

export class GetFailure implements Action {
  readonly type = StockActions.GET_FAILURE;

  constructor(public payload: any) {
  }
}

export class UpdateRefreshRate implements Action {
  readonly type = StockActions.UPDATE_REFRESH_RATE;

  constructor(public payload: any) {
  }
}

export type stockActionTypes =
  Add |
  Remove |
  Get |
  GetSuccess |
  GetFailure;
