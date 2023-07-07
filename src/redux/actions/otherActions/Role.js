// Role

import {
  OPERATE_ROLE_ERROR,
  OPERATE_ROLE_LOADING,
  OPERATE_ROLE_SUCCESS,
} from "src/redux/constants/otherActionTypes/Role";

export const operateRoleLoading = (isLoading) => ({
  type: OPERATE_ROLE_LOADING,
  isLoading: isLoading,
});

export const operateRoleSuccess = (isLoading) => ({
  type: OPERATE_ROLE_SUCCESS,
  isLoading: isLoading,
});

export const operateRoleError = (isLoading) => ({
  type: OPERATE_ROLE_ERROR,
  isLoading: isLoading,
});
