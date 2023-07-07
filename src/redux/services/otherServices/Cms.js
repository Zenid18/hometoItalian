import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateCmsError,
  operateCmsLoading,
  operateCmsSuccess,
} from "src/redux/actions/otherActions/Cms";

// Cms Api's

export const addCms = (body) => async (dispatch) => {
  dispatch(operateCmsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(url.ADD_CMS, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateCmsSuccess(false));
      console.log(response, "ADD_CMS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateCmsError(false));
    return { message: error };
  }
};

export const getCms = () => async (dispatch) => {
  dispatch(operateCmsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(url.GET_CMS, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateCmsSuccess(false));
      console.log(response, "GET_CMS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateCmsError(false));
    return { message: error };
  }
};
export const editCms = (body) => async (dispatch) => {
  dispatch(operateCmsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.put(`${url.GET_CMS}`, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateCmsSuccess(false));
      console.log(response, "EDIT_CMS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateCmsError(false));
    return { message: error };
  }
};
