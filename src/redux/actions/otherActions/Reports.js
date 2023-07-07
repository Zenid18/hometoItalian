// Reports

import {
  OPERATE_REPORTS_ERROR,
  OPERATE_REPORTS_LOADING,
  OPERATE_REPORTS_SUCCESS,
} from "src/redux/constants/otherActionTypes/Reports";

export const operateReportsLoading = (isLoading) => ({
  type: OPERATE_REPORTS_LOADING,
  isLoading: isLoading,
});

export const operateReportsSuccess = (isLoading) => ({
  type: OPERATE_REPORTS_SUCCESS,
  isLoading: isLoading,
});

export const operateReportsError = (isLoading) => ({
  type: OPERATE_REPORTS_ERROR,
  isLoading: isLoading,
});
