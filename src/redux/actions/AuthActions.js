import {
  OTP_VERIFY_ERROR,
  OTP_VERIFY_LOADING,
  OTP_VERIFY_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCESS,
  USER_ACCOUNT_DETAILS_ERROR,
  USER_ACCOUNT_DETAILS_LOADING,
  USER_ACCOUNT_DETAILS_SUCCESS,
  USER_ACCOUNT_UPDATE_ERROR,
  USER_ACCOUNT_UPDATE_LOADING,
  USER_ACCOUNT_UPDATE_SUCCESS,
  USER_FORGOTPASS_ERROR,
  USER_FORGOTPASS_LOADING,
  USER_FORGOTPASS_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_ERROR,
  USER_LOGOUT_LOADING,
  USER_LOGOUT_SUCCESS,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_LOADING,
  USER_SIGN_UP_SUCCESS,

} from "../constants/AuthActionTypes";


export const userLoginLoading = (isLoading) => ({
  type: USER_LOGIN_LOADING,
  isLoading: isLoading,
});

export const userLoginSuccess = (isLoading, data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    isLoading: isLoading,
    data: data,
  };
};

export const userLoginError = (isLoading) => ({
  type: USER_LOGIN_ERROR,
  isLoading: isLoading,
});
export const userSignUpLoading = (isLoading) => ({
  type: USER_SIGN_UP_LOADING,
  isLoading: isLoading,
});

export const userSignUpSuccess = (isLoading) => ({
  type: USER_SIGN_UP_SUCCESS,
  isLoading: isLoading,
});

export const userSignUpError = (isLoading) => ({
  type: USER_SIGN_UP_ERROR,
  isLoading: isLoading,
});
export const userForgotPassLoading = (isLoading) => ({
  type: USER_FORGOTPASS_LOADING,
  isLoading: isLoading,
});

export const userForgotPassSuccess = (isLoading) => ({
  type: USER_FORGOTPASS_SUCCESS,
  isLoading: isLoading,
});

export const userForgotPassError = (isLoading) => ({
  type: USER_FORGOTPASS_ERROR,
  isLoading: isLoading,
});
;

export const userAccountDetailsLoading = (isLoading) => ({
  type: USER_ACCOUNT_DETAILS_LOADING,
  isLoading: isLoading,
});

export const userAccountDetailsSuccess = (isLoading) => ({
  type: USER_ACCOUNT_DETAILS_SUCCESS,
  isLoading: isLoading,
});

export const userAccountDetailsError = (isLoading) => ({
  type: USER_ACCOUNT_DETAILS_ERROR,
  isLoading: isLoading,
});

export const userAccountUpdateLoading = (isLoading) => ({
  type: USER_ACCOUNT_UPDATE_LOADING,
  isLoading: isLoading,
});

export const userAccountUpdateSuccess = (isLoading, data) => {
  return {
    type: USER_ACCOUNT_UPDATE_SUCCESS,
    isLoading: isLoading,
    data: data,
  };
};

export const userAccountUpdateError = (isLoading) => ({
  type: USER_ACCOUNT_UPDATE_ERROR,
  isLoading: isLoading,
});
export const userLogoutLoading = (isLoading) => ({
  type: USER_LOGOUT_LOADING,
  isLoading: isLoading,
});

export const userLogoutSuccess = (isLoading) => {
  return {
    type: USER_LOGOUT_SUCCESS,
    isLoading: isLoading,
  };
};

export const userLogoutError = (isLoading) => ({
  type: USER_LOGOUT_ERROR,
  isLoading: isLoading,
});


export const OtpVerifyLoading = (isLoading) => {
  return {
    type: OTP_VERIFY_LOADING,
    isLoading: isLoading,
  };
}
export const OtpVerifySucess = (isLoading, data) => {
  return {
    type: OTP_VERIFY_SUCCESS,
    isLoading: isLoading,
    data: data,
  };
};
export const OtpVerifyError = (isLoading) => {
  return {
    type: OTP_VERIFY_ERROR,
    isLoading: isLoading,
  };
}


export const resetPasswordLoading = (isLoading) => {
  return {
    type: RESET_PASSWORD_LOADING,
    isLoading: isLoading,
  };
}
export const resetPasswordSucess = (isLoading, data) => {
  return {
    type: RESET_PASSWORD_SUCESS,
    isLoading: isLoading,
    data: data,
  };
};
export const resetPasswordError = (isLoading) => {
  return {
    type: RESET_PASSWORD_ERROR,
    isLoading: isLoading,
  };
}
