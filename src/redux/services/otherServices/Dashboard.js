import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateDashboardError,
  operateDashboardLoading,
  operateDashboardSuccess,
} from "src/redux/actions/otherActions/Dashboard";

// Dashboard Api's

export const getDashboards = () => async (dispatch) => {
  dispatch(operateDashboardLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(`${url.GET_DASHBOARD}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateDashboardSuccess(false));
      console.log(response, "GET_Dashboard-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateDashboardError(false));
    return { message: error };
  }
};

export const getDashboardsCoinsGraph = (graph) => async (dispatch) => {
  dispatch(operateDashboardLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_DASHBOARD_COINS}?type=${graph}`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateDashboardSuccess(false));
      console.log(response, "GET_COINS_GRAPH-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateDashboardError(false));
    return { message: error };
  }
};
export const getDashboardsUsersGraph = (graph) => async (dispatch) => {
  dispatch(operateDashboardLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_DASHBOARD_USERS}?type=${graph}`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateDashboardSuccess(false));
      console.log(response, "GET_USER_GRAPH-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateDashboardError(false));
    return { message: error };
  }
};
export const getDashboardsRevenueGraph = (graph) => async (dispatch) => {
  dispatch(operateDashboardLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_DASHBOARD_REVENUE}?type=${graph}`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateDashboardSuccess(false));
      console.log(response, "GET_REVENUE_GRAPH-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateDashboardError(false));
    return { message: error };
  }
};
