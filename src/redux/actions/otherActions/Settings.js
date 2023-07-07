// Settings

import {
  OPERATE_SETTINGS_ERROR,
  OPERATE_SETTINGS_LOADING,
  OPERATE_SETTINGS_SUCCESS,
} from "src/redux/constants/otherActionTypes/Settings";

export const operateSettingsLoading = (isLoading) => ({
  type: OPERATE_SETTINGS_LOADING,
  isLoading: isLoading,
});

export const operateSettingsSuccess = (isLoading) => ({
  type: OPERATE_SETTINGS_SUCCESS,
  isLoading: isLoading,
});

export const operateSettingsError = (isLoading) => ({
  type: OPERATE_SETTINGS_ERROR,
  isLoading: isLoading,
});
