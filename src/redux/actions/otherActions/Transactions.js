// Transactions

import {
  OPERATE_TRANSATIONS_ERROR,
  OPERATE_TRANSATIONS_LOADING,
  OPERATE_TRANSATIONS_SUCCESS,
} from "src/redux/constants/otherActionTypes/Transactions";

export const operateTransactionLoading = (isLoading) => ({
  type: OPERATE_TRANSATIONS_LOADING,
  isLoading: isLoading,
});

export const operateTransactionSuccess = (isLoading) => ({
  type: OPERATE_TRANSATIONS_SUCCESS,
  isLoading: isLoading,
});

export const operateTransactionError = (isLoading) => ({
  type: OPERATE_TRANSATIONS_ERROR,
  isLoading: isLoading,
});
