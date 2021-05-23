// Import reducer
import { fetchReducer } from '../fetchReducer';

// Import types
import { ActionTypes } from '../actionTypes';

// Import helpers
import { mockedUsers } from '../../components/UsersList/helpers';

const MOCKED_INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false,
};

describe('fetchReducer works correctly if', () => {
  it('return the initial state', () => {
    expect(
      fetchReducer(MOCKED_INITIAL_STATE, {
        //@ts-ignore
        type: 'TEST_TYPE_ACTION',
      })
    ).toEqual(MOCKED_INITIAL_STATE);
  });
  it('handle FETCH INIT', () => {
    const MOCKED_STATE_AFTER_INIT = {
      data: [],
      isLoading: true,
      isError: false,
    };
    expect(
      fetchReducer(MOCKED_INITIAL_STATE, {
        type: ActionTypes.FETCH_INIT,
      })
    ).toEqual(MOCKED_STATE_AFTER_INIT);
  });
  it('handle FETCH SUCCESS', () => {
    const MOCKED_STATE_SUCCESS = {
      data: mockedUsers,
      isLoading: false,
      isError: false,
    };
    expect(
      fetchReducer(MOCKED_INITIAL_STATE, {
        type: ActionTypes.FETCH_SUCCESS,
        payload: { data: mockedUsers },
      })
    ).toEqual(MOCKED_STATE_SUCCESS);
  });
  it('handle FETCH ERROR', () => {
    const MOCKED_STATE_ERROR = {
      data: [],
      isLoading: false,
      isError: true,
    };
    expect(
      fetchReducer(MOCKED_INITIAL_STATE, {
        type: ActionTypes.FETCH_ERROR,
      })
    ).toEqual(MOCKED_STATE_ERROR);
  });
});
