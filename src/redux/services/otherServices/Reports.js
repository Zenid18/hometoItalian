import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateReportsError,
  operateReportsLoading,
  operateReportsSuccess,
} from "src/redux/actions/otherActions/Reports";

// Reports Api's

export const getReportss = (query, page) => async (dispatch) => {
  dispatch(operateReportsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_REPORTS}?page=${page + 1}&size=10&search=${query}`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateReportsSuccess(false));
      console.log(response, "GET_Reports-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateReportsError(false));
    return { message: error };
  }
};
