import { api } from '~/services';
import { AppThunk } from '../store';
import {
  GET_BALANCES_REQUEST,
  GET_BALANCES_SUCCESS,
  GET_BALANCES_FAILURE,
} from './action-types';

export const thunkOnGetBalances = (address: string): AppThunk => {
  return async (dispatch) => {
    dispatch({ type: GET_BALANCES_REQUEST });
    try {
      const data = await api.fetchBalances(address);
      dispatch({ type: GET_BALANCES_SUCCESS, payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_BALANCES_FAILURE });
    }
  };
};
