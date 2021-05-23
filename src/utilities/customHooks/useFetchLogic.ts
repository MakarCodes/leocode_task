import { useReducer, useEffect, Reducer } from 'react';

// Import reducer
import { fetchReducer } from '../../reducer/fetchReducer';

// Import action types
import { ActionTypes, Actions, IInitialState } from '../../reducer/actionTypes';

export const useFetchLogic = <T>(url: string, initialData: T) => {
  const initialState: IInitialState<T> = {
    data: initialData,
    isLoading: false,
    isError: false,
  };

  const [state, dispatch] = useReducer<Reducer<IInitialState<T>, Actions<T>>>(
    fetchReducer,
    initialState
  );

  const { data, isLoading, isError } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: ActionTypes.FETCH_INIT,
      });
      try {
        const response = await fetch(url);
        const result = await response.json();
        dispatch({
          type: ActionTypes.FETCH_SUCCESS,
          payload: {
            data: result,
          },
        });
      } catch (err) {
        dispatch({
          type: ActionTypes.FETCH_ERROR,
        });
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};
