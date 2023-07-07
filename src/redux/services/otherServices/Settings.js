import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateSettingsError,
  operateSettingsLoading,
  operateSettingsSuccess,
} from "src/redux/actions/otherActions/Settings";

// Settings Api's

export const addSettings = (body) => async (dispatch) => {
  dispatch(operateSettingsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.put(url.ADD_SETTINGS, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateSettingsSuccess(false));
      console.log(response, "UPDATE_SETTINGS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateSettingsError(false));
    return { message: error };
  }
};

export const getSettings = () => async (dispatch) => {
  dispatch(operateSettingsLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(url.GET_SETTINGS, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateSettingsSuccess(false));
      console.log(response, "GET_SETTINGS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateSettingsError(false));
    return { message: error };
  }
};
