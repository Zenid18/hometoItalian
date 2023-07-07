import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateFaqError,
  operateFaqLoading,
  operateFaqSuccess,
} from "src/redux/actions/otherActions/Faq";

// Faq Api's

export const addFaq = (body) => async (dispatch) => {
  dispatch(operateFaqLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(url.ADD_FAQ, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateFaqSuccess(false));
      console.log(response, "ADD_FAQ-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateFaqError(false));
    return { message: error };
  }
};
export const getFaq = () => async (dispatch) => {
  dispatch(operateFaqLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(url.GET_FAQ, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateFaqSuccess(false));
      console.log(response, "GET_FAQ-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateFaqError(false));
    return { message: error };
  }
};
export const deleteFaq = (id) => async (dispatch) => {
  dispatch(operateFaqLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.deleteApi(`${url.GET_FAQ}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateFaqSuccess(false));
      console.log(response, "DELETE_FAQ-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateFaqError(false));
    return { message: error };
  }
};
export const handleEditFaq = (body, id) => async (dispatch) => {
  dispatch(operateFaqLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.put(`${url.ADD_FAQ}/${id}`, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateFaqSuccess(false));
      console.log(response, "EDIT_FAQ-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateFaqError(false));
    return { message: error };
  }
};
