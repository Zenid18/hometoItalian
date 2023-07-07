import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateSubAdminError,
  operateSubAdminLoading,
  operateSubAdminSuccess,
} from "src/redux/actions/otherActions/SubAdmin";

// // sub-admin Api's

export const getSubAdmins = (query, page) => async (dispatch) => {
  dispatch(operateSubAdminLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_SUB_ADMINS}?page=${page + 1}&size=10&search=${query}`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateSubAdminSuccess(false));
      console.log(response, "GET_SUB_ADMINS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateSubAdminError(false));
    return { message: error };
  }
};

export const getOneSubAdmin = (id) => async (dispatch) => {
  dispatch(operateSubAdminLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(`${url.GET_SUB_ADMINS}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateSubAdminSuccess(false));
      console.log(response, "GET_ONE_SUB_ADMIN-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateSubAdminError(false));
    return { message: error };
  }
};
export const blockSubAdmin = (id) => async (dispatch) => {
  dispatch(operateSubAdminLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.put(`${url.STATUS_CHANGE}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateSubAdminSuccess(false));
      console.log(response, "BLOCK_SUBADMIN-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateSubAdminError(false));
    return { message: error };
  }
};
export const deleteMultipleSubAdmin = (body) => async (dispatch) => {
  dispatch(operateSubAdminLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.deleteApi(url.GET_SUB_ADMINS, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateSubAdminSuccess(false));
      console.log(response, "DELETE_SUBADMINS----------");
    }
    return response;
  } catch (error) {
    console.log(error, "err-----------");
    dispatch(operateSubAdminError(false));
    return { message: error };
  }
};

export const addSubAdmin = (body) => async (dispatch) => {
  dispatch(operateSubAdminLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(url.GET_SUB_ADMINS, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateSubAdminSuccess(false));
      console.log(response, "ADD_SUB_ADMIN-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateSubAdminError(false));
    return { message: error };
  }
};
export const editSubAdmin = (body, id) => async (dispatch) => {
  dispatch(operateSubAdminLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.put(
      `${url.GET_SUB_ADMINS}/${id}`,
      token,
      body
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateSubAdminSuccess(false));
      console.log(response, "EDIT_SUB_ADMIN-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateSubAdminError(false));
    return { message: error };
  }
};
