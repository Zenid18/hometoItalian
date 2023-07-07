import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateRatingsError,
  operateRatingsLoading,
  operateRatingsSuccess,
} from "src/redux/actions/otherActions/Ratings";

// Ratings Api's

export const getRatings = (query, page) => async (dispatch) => {
  dispatch(operateRatingsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_RATINGS}?page=${page + 1}&size=10&search=${query}`,
      token
    );
    if (response.statusCode == 200) {
      dispatch(operateRatingsSuccess(false));
      console.log(response, "GET_RATINGS----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateRatingsError(false));
    return { message: error };
  }
};
