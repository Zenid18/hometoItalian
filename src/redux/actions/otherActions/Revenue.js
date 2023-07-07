// Revenue

import {
  OPERATE_REVENUE_ERROR,
  OPERATE_REVENUE_LOADING,
  OPERATE_REVENUE_SUCCESS,
} from "src/redux/constants/otherActionTypes/Revenue";

export const operateRevenueLoading = (isLoading) => ({
  type: OPERATE_REVENUE_LOADING,
  isLoading: isLoading,
});

export const operateRevenueSuccess = (isLoading) => ({
  type: OPERATE_REVENUE_SUCCESS,
  isLoading: isLoading,
});

export const operateRevenueError = (isLoading) => ({
  type: OPERATE_REVENUE_ERROR,
  isLoading: isLoading,
});
