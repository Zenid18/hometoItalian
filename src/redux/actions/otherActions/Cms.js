// Cms

import {
  OPERATE_CMS_ERROR,
  OPERATE_CMS_LOADING,
  OPERATE_CMS_SUCCESS,
} from "src/redux/constants/otherActionTypes/Cms";

export const operateCmsLoading = (isLoading) => ({
  type: OPERATE_CMS_LOADING,
  isLoading: isLoading,
});

export const operateCmsSuccess = (isLoading) => ({
  type: OPERATE_CMS_SUCCESS,
  isLoading: isLoading,
});

export const operateCmsError = (isLoading) => ({
  type: OPERATE_CMS_ERROR,
  isLoading: isLoading,
});
