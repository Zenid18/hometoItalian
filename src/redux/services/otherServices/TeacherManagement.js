import { storageKey, getData } from "../../../constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service"
import { operateTeacherError, operateTeacherLoading, operateTeacherSuccess } from "../../actions/otherActions/TeacherManagement";

export const getTecherList = () => async (dispatch) => {
  dispatch(operateTeacherLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(url.GET_TEACHERLIST, token);
    if (response.statusCode == 200) {
      dispatch(operateTeacherSuccess(false));
      console.log(response, "GET_ROLE-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateTeacherError(false));
  }
};
export const getTutorDetail = (body) => async (dispatch) => {
  dispatch(operateTeacherLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(url.POST_TEACHERDETAIL, token, body);
    if (response.statusCode == 200) {
      dispatch(operateTeacherSuccess(false));
      console.log(response, "POST_TEACHERDETAIL-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateTeacherError(false));
  }
};