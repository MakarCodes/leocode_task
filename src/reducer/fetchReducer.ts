// Import types
import {
  IInitialState,
  Actions,
  ActionTypes,
  FetchInitAction,
  FetchSuccesstAction,
  FetchErrorAction,
} from './actionTypes';

// Import helpers
import { updateObject } from '../helpers/updateObject';

const fetchInit = <T>(state: IInitialState<T>, action: FetchInitAction) =>
  updateObject(state, { isLoading: true });

const fetchSuccess = <T>(
  state: IInitialState<T>,
  action: FetchSuccesstAction<T>
) => {
  const { data } = action.payload;
  return updateObject(state, {
    data,
    isLoading: false,
    isError: false,
  });
};

const fetchError = <T>(state: IInitialState<T>, action: FetchErrorAction) =>
  updateObject(state, { isLoading: false, isError: true });

export const fetchReducer = <T>(
  state: IInitialState<T>,
  action: Actions<T>
) => {
  switch (action.type) {
    case ActionTypes.FETCH_INIT:
      return fetchInit(state, action);
    case ActionTypes.FETCH_SUCCESS:
      return fetchSuccess(state, action);
    case ActionTypes.FETCH_ERROR:
      return fetchError(state, action);
    default:
      return state;
  }
};
