import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateNotificationsError,
  operateNotificationsLoading,
  operateNotificationsSuccess,
} from "src/redux/actions/otherActions/Notifications";

// Notifications Api's

export const addNotifications = (body) => async (dispatch) => {
  dispatch(operateNotificationsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(url.ADD_NOTIFICATION, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateNotificationsSuccess(false));
      console.log(response, "ADD_NOTIFICATION-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateNotificationsError(false));
    return { message: error };
  }
};

export const getNotifications = (page, query) => async (dispatch) => {
  dispatch(operateNotificationsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_NOTIFICATION}?page=${page + 1}&limit=10&search=${query}`,
      token
    );
    if (response.statusCode == 200) {
      dispatch(operateNotificationsSuccess(false));
      console.log(response, "GET_NOTIFICATION-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateNotificationsError(false));
    return { message: error };
  }
};

export const deleteNotification = (body) => async (dispatch) => {
  dispatch(operateNotificationsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.deleteApi(
      `${url.GET_NOTIFICATION}`,
      token,
      body
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateNotificationsSuccess(false));
      console.log(response, "DELETE_NOTIFICATION-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateNotificationsError(false));
    return { message: error };
  }
};
