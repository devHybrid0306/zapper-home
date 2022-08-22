import { AnyAction } from '@reduxjs/toolkit';
import { Feed } from '~/types';
import {
  GET_BALANCES_REQUEST,
  GET_BALANCES_SUCCESS,
  GET_BALANCES_FAILURE,
} from '../actions/action-types';

const initialState: Feed = {
  isLoading: false,
  error: false,
};

const feedReducer = (state = initialState, action: AnyAction): Feed => {
  switch (action.type) {
    case GET_BALANCES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case GET_BALANCES_SUCCESS:
      return {
        ...state,
        balances: action.payload,
        isLoading: false,
        error: false,
      };
    case GET_BALANCES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default feedReducer;
