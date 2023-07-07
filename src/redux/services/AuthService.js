import * as url from "../../constants/urls";
import { storeData, getData, storageKey } from '../../constants/storage'
import {
  userAccountDetailsError,
  userAccountDetailsLoading,
  userAccountDetailsSuccess,
  userAccountUpdateError,
  userAccountUpdateLoading,
  userAccountUpdateSuccess,
  userForgotPassError,
  userForgotPassLoading,
  userForgotPassSuccess,
  userLoginError,
  userLoginLoading,
  userLoginSuccess,
  userLogoutError,
  userLogoutLoading,
  userLogoutSuccess,
  userSignUpError,
  userSignUpLoading,
  userSignUpSuccess,

} from "../actions/AuthActions";
import * as Service from "../../constants/service";




export const userLogin = (body) => async (dispatch) => {
  dispatch(userLoginLoading(true));
  try {
    const response = await Service.post(url.LOGIN_API, "", body);
    const message = response.message;

    if (response.success == true || response?.status == 200) {
      dispatch(userLoginSuccess(false));
      console.log(response, "LOGIN_API-----------");
    } else {
      dispatch(userLoginSuccess(false));
    }
    if (response) {
      storeData(storageKey?.AUTH_TOKEN, response?.token);
      storeData(storageKey.USER_DATA, JSON.stringify(response.responce));
    }
    return response;

  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(userLoginError(false));
    return { message: error };
  }
};


export const userSignUp = (body) => async (dispatch) => {
  dispatch(userSignUpLoading(true));
  try {
    const response = await Service.post(url.SIGN_UP, "", body);
    const message = response.message;
    if (response.success == true || response?.status == 200) {
      dispatch(userSignUpSuccess(false));
      console.log(response, "SIGN_UP_API-----------");
      return response;
    } else {
      dispatch(userLoginSuccess(false));
    }
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(userSignUpError(false));
    return { message: error };
  }
};
export const forgotPassword = (body) => async (dispatch) => {
  console.log("forgotPassword--", body);
  dispatch(userForgotPassLoading(true));
  try {
    const response = await Service.post(url.FORGOTPASS_API, "", body);
    console.log("forgotPass response--", response);
    dispatch(userForgotPassSuccess(false));
    return response;
  } catch (error) {
    // console.log("forgotPassword response--", response);
    dispatch(userForgotPassError(false));
    return { message: error };
  }
};

export const getAccountDetails = () => async (dispatch) => {
  const token = getData(storageKey.AUTH_TOKEN);
  dispatch(userAccountDetailsLoading(true));
  try {
    const response = await Service.get(url.ACCOUNT_DETAILS, token);
    console.log("getAccountDetails --", response);
    dispatch(userAccountDetailsSuccess(false));
    return response;
  } catch (error) {
    console.log("getAccountDetails error --", error);
    dispatch(userAccountDetailsError(false));
    return { message: error };
  }
};

export const updateAccountDetails = (body) => async (dispatch) => {
  const token = getData(storageKey?.AUTH_TOKEN)
  dispatch(userAccountUpdateLoading(true));
  try {
    const response = await Service.put(url.ACCOUNT_UPDATE, token, body);
    console.log("updateAccountDetails --", response);
    // dispatch both loading and success actions with the updated account details data
    dispatch(userAccountUpdateLoading(false));
    dispatch(userAccountUpdateSuccess(false, response?.data));
    // return the updated account details data
    return response;
  } catch (error) {
    console.log("updateAccountDetails error --", error);
    dispatch(userAccountUpdateError(false));
    return { message: error };
  }
};
export const handleLogoutUser = () => async (dispatch) => {
  const token = getData(storageKey.AUTH_TOKEN);
  dispatch(userLogoutLoading(true));
  try {
    const response = await Service.post(url.LOGOUT_USER, token);
    console.log("Logouttt --", response);
    dispatch(userLogoutSuccess(false));
    return response;
  } catch (error) {
    console.log("Logout error --", error);
    dispatch(userLogoutError(false));
    return { message: error };
  }
};
