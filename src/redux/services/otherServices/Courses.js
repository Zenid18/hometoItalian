import { storageKey, getData } from "../../../constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service"
import { operateCourseError, operateCourseLoading, operateCourseSuccess } from "../../actions/Courses";

export const getCourseList = () => async (dispatch) => {
    dispatch(operateCourseLoading(true));
    const token = getData(storageKey.AUTH_TOKEN);
    try {
        const response = await Service.get(url.GET_COURSE_LIST, token);
        if (response.status == 200) {
            dispatch(operateCourseSuccess(false));
            console.log(response, "GET_ALL_COURSES-----------");
        }
        return response;
    } catch (error) {
        // console.log(error, 'err-----------');
        dispatch(operateCourseError(false));
    }
};
