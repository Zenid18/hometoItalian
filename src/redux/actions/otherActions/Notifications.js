// Notifications

import {
  OPERATE_NOTIFICATION_ERROR,
  OPERATE_NOTIFICATION_LOADING,
  OPERATE_NOTIFICATION_SUCCESS,
} from "src/redux/constants/otherActionTypes/Notifications";

export const operateNotificationsLoading = (isLoading) => ({
  type: OPERATE_NOTIFICATION_LOADING,
  isLoading: isLoading,
});

export const operateNotificationsSuccess = (isLoading) => ({
  type: OPERATE_NOTIFICATION_SUCCESS,
  isLoading: isLoading,
});

export const operateNotificationsError = (isLoading) => ({
  type: OPERATE_NOTIFICATION_ERROR,
  isLoading: isLoading,
});
