// subAdmin

import {
  OPERATE_SUB_ADMIN_ERROR,
  OPERATE_SUB_ADMIN_LOADING,
  OPERATE_SUB_ADMIN_SUCCESS,
} from "src/redux/constants/otherActionTypes/SubAdmin";

export const operateSubAdminLoading = (isLoading) => ({
  type: OPERATE_SUB_ADMIN_LOADING,
  isLoading: isLoading,
});

export const operateSubAdminSuccess = (isLoading) => ({
  type: OPERATE_SUB_ADMIN_SUCCESS,
  isLoading: isLoading,
});

export const operateSubAdminError = (isLoading) => ({
  type: OPERATE_SUB_ADMIN_ERROR,
  isLoading: isLoading,
});
