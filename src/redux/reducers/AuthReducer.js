import {
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

const initialState = {
  isLoading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_SIGN_UP_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case USER_FORGOTPASS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_FORGOTPASS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_FORGOTPASS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case USER_ACCOUNT_DETAILS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_ACCOUNT_DETAILS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_ACCOUNT_UPDATE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_ACCOUNT_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        data: action.data,
      };

    case USER_ACCOUNT_UPDATE_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case USER_LOGOUT_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case USER_LOGOUT_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
