import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import { operateStudentError, operateStudentLoading, operateStudentSuccess } from "@/redux/actions/otherActions/Students";

// STUDENTS Api's

 

export const editStudent = (body) => async (dispatch) => {
  dispatch(operateStudentLoading(true))
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(
      `${url.EDIT_STU}`,
      token,
      body
    );
    const message = response.message;
    if (response.status == 200) {
      dispatch(operateStudentSuccess(false))
      console.log(response, "EDIT_STUDENT-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
   dispatch(operateStudentError(false))
    return { message: error };
  }
};

export const getStudents = () => async (dispatch) => {
  dispatch(operateStudentLoading(true))
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_STUDENTS}`,token,
    );
    const message = response.message;
    if (response.status == 200) {
      dispatch(operateStudentSuccess(false))
      console.log(response, "GET_STUDENTS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
   dispatch(operateStudentError(false))
    return { message: error };
  }
};
export const getCourse = () => async (dispatch) => {
  dispatch(operateStudentLoading(true))
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_COURSE}`,token,
    );
    const message = response.message;
    if (response.status == 200) {
      dispatch(operateStudentSuccess(false))
      console.log(response, "GET_COURSES-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
   dispatch(operateStudentError(false))
    return { message: error };
  }
};

export const getOneStudent = (body) => async (dispatch) => {
  dispatch(operateStudentLoading(true))
  const token = getData(storageKey.AUTH_TOKEN);
  try {
  const response = await Service.post(url.STU_DEATIL, token, body);
    const message = response.message;
    if (response.status == 200) {
      dispatch(operateStudentSuccess(false))
      console.log(response, "GET_ONE_STUDENT-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
   dispatch(operateStudentError(false))
    return { message: error };
  }
};
 
export const deleteStudent = (body) => async (dispatch) => {
  dispatch(operateStudentLoading(true))
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(url.DEL_STU, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateStudentSuccess(false))
      console.log(response, "DELETE_STUDENT-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
   dispatch(operateStudentError(false))
    return { message: error };
  }
};
    export const addStudent = (body) => async (dispatch) => {
       dispatch(operateStudentLoading(true))
        const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(url.ADD_STUDENT, token, body);
    const message = response.message;

    if (response.status == 200) {
      dispatch(operateStudentSuccess(false))
      console.log(response, "ADD STUDENT-----------");
    } else {
   dispatch(operateStudentSuccess(false))
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateStudentError(false))
    return { message: error };
  }
};

 
