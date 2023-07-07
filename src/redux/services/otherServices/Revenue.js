import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateRevenueError,
  operateRevenueLoading,
  operateRevenueSuccess,
} from "src/redux/actions/otherActions/Revenue";

// // Revenue Api's

export const getPayments = (page) => async (dispatch) => {
  dispatch(operateRevenueLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_PAYMENT}?page=${page + 1}&size=10`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRevenueSuccess(false));
      console.log(response, "GET_PAYMENTS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRevenueError(false));
    return { message: error };
  }
};
export const getRevenues = (id, body, page) => async (dispatch) => {
  dispatch(operateRevenueLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(
      `${url.GET_REVENUE}?page=${page + 1}&size=10&instructorId=${id}`,
      token,
      body
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRevenueSuccess(false));
      console.log(response, "GET_REVENUE-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRevenueError(false));
    return { message: error };
  }
};
export const viewHistory = (page, id) => async (dispatch) => {
  dispatch(operateRevenueLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.REVENUE_HISTORY}?instructorId=${id}&page=${page + 1}&size=10`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateRevenueSuccess(false));
      console.log(response, "GET_REVENUE_HISTORY-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRevenueError(false));
    return { message: error };
  }
};
