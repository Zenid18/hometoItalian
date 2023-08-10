import { OPERATE_COURSE_ERROR, OPERATE_COURSE_LOADING, OPERATE_COURSE_SUCCESS } from "../constants/otherActionTypes/Courses";



export const operateCourseLoading = (isLoading) => ({
    type: OPERATE_COURSE_LOADING,
    isLoading: isLoading,
});

export const operateCourseSuccess = (isLoading) => ({
    type: OPERATE_COURSE_SUCCESS,
    isLoading: isLoading,
});

export const operateCourseError = (isLoading) => ({
    type: OPERATE_COURSE_ERROR,
    isLoading: isLoading,
});
