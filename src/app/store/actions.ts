import {Action} from '@ngrx/store';

export enum StockActions {
  GET = '[stocks] Get stocks',
  GET_SUCCESS = '[stocks] Get stocks success',
  GET_FAILURE = '[stocks] Get stocks failure',

  ADD = '[stocks] add new stock',

  REMOVE = '[stocks] remove stock from list',
}

export class Add implements Action {
  readonly type = StockActions.ADD;

  constructor(public payload: any) {
  }
}

export class Remove implements Action {
  readonly type = StockActions.REMOVE;

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
}

export type stockActionTypes =
  Add |
  Remove |
  Get |
  GetSuccess |
  GetFailure;
