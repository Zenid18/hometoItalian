import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateRoleError,
  operateRoleLoading,
  operateRoleSuccess,
} from "src/redux/actions/otherActions/Role";

// Role Api's

export const addRole = (body) => async (dispatch) => {
  dispatch(operateRoleLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(url.ADD_ROLE, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRoleSuccess(false));
      console.log(response, "ADD_ROLE-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRoleError(false));
    return { message: error };
  }
};

export const editRole = (body, id) => async (dispatch) => {
  dispatch(operateRoleLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.put(`${url.EDIT_ROLE}/${id}`, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRoleSuccess(false));
      console.log(response, "EDIT_ROLE-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRoleError(false));
    return { message: error };
  }
};

export const getRole = () => async (dispatch) => {
  dispatch(operateRoleLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(url.GET_ROLE, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRoleSuccess(false));
      console.log(response, "GET_ROLE-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRoleError(false));
    return { message: error };
  }
};

export const getOneRole = (id) => async (dispatch) => {
  dispatch(operateRoleLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(`${url.GET_ROLE}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRoleSuccess(false));
      console.log(response, "GET_ONE_ROLE---------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRoleError(false));
    return { message: error };
  }
};

export const deleteOneRole = (id) => async (dispatch) => {
  dispatch(operateRoleLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.deleteApi(`${url.DELETE_ROLE}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRoleSuccess(false));
      console.log(response, "DELETE_ROLE---------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRoleError(false));
    return { message: error };
  }
};
export const disableRole = (id) => async (dispatch) => {
  dispatch(operateRoleLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(`${url.DISABLE_ROLE}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRoleSuccess(false));
      console.log(response, "DISABLE ROLE-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRoleError(false));
    return { message: error };
  }
};
