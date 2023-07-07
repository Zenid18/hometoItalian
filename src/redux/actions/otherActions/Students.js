// Students

import { OPERATE_STUDENT_ERROR, OPERATE_STUDENT_LOADING, OPERATE_STUDENT_SUCCESS } from "@/redux/constants/otherActionTypes/Students";
export const operateStudentLoading = (isLoading) => ({
  type: OPERATE_STUDENT_LOADING,
  isLoading: isLoading,
});

export const operateStudentSuccess = (isLoading) => ({
  type: OPERATE_STUDENT_SUCCESS,
  isLoading: isLoading,
});

export const operateStudentError = (isLoading) => ({
  type: OPERATE_STUDENT_ERROR,
  isLoading: isLoading,
});
