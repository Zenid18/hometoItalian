import {
  OPERATE_TEACHER_ERROR,
  OPERATE_TEACHER_LOADING,
  OPERATE_TEACHER_SUCCESS,
} from "../../constants/otherActionTypes/TeacherManagement";

export const operateTeacherLoading = (isLoading) => ({
  type: OPERATE_TEACHER_LOADING,
  isLoading: isLoading,
});

export const operateTeacherSuccess = (isLoading) => ({
  type: OPERATE_TEACHER_SUCCESS,
  isLoading: isLoading,
});

export const operateTeacherError = (isLoading) => ({
  type: OPERATE_TEACHER_ERROR,
  isLoading: isLoading,
});
