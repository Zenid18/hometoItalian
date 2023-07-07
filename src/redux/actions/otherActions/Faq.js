// Instructors

import {
  OPERATE_FAQ_ERROR,
  OPERATE_FAQ_LOADING,
  OPERATE_FAQ_SUCCESS,
} from "src/redux/constants/otherActionTypes/Faq";

export const operateFaqLoading = (isLoading) => ({
  type: OPERATE_FAQ_LOADING,
  isLoading: isLoading,
});

export const operateFaqSuccess = (isLoading) => ({
  type: OPERATE_FAQ_SUCCESS,
  isLoading: isLoading,
});

export const operateFaqError = (isLoading) => ({
  type: OPERATE_FAQ_ERROR,
  isLoading: isLoading,
});
