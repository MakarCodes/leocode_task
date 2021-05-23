export interface IInitialState<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

export enum ActionTypes {
  FETCH_INIT = 'FETCH INIT',
  FETCH_SUCCESS = 'FETCH SUCCESS',
  FETCH_ERROR = 'FETCH ERROR',
}

export type FetchInitAction = {
  type: 'FETCH INIT';
};
export type FetchSuccesstAction<T> = {
  type: 'FETCH SUCCESS';
  payload: { data: T };
};
export type FetchErrorAction = {
  type: 'FETCH ERROR';
};

export type Actions<T> =
  | FetchInitAction
  | FetchSuccesstAction<T>
  | FetchErrorAction;
