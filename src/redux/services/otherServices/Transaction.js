import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateTransactionError,
  operateTransactionLoading,
  operateTransactionSuccess,
} from "src/redux/actions/otherActions/Transactions";

// Transactions Api's

export const getTransactions = (page, query) => async (dispatch) => {
  dispatch(operateTransactionLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_TRANSACTION}?page=${page + 1}&limit=10&search=${query}`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateTransactionSuccess(false));
      console.log(response, "GET_TRANSACTION-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateTransactionError(false));
    return { message: error };
  }
};

export const deleteTransaction = (body) => async (dispatch) => {
  dispatch(operateTransactionLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.deleteApi(
      `${url.DELETE_TRANSACTION}`,
      token,
      body
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateTransactionSuccess(false));
      console.log(response, "DELETE_TRANSACTION-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateTransactionError(false));
    return { message: error };
  }
};

export const getOneTransaction = (id) => async (dispatch) => {
  dispatch(operateTransactionLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(`${url.GET_TRANSACTION}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateTransactionSuccess(false));
      console.log(response, "GET_ONE_TRANSACTION-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateTransactionError(false));
    return { message: error };
  }
};
