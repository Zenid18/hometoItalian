
import { OPERATE_COURSE_ERROR, OPERATE_COURSE_LOADING, OPERATE_COURSE_SUCCESS } from "../constants/otherActionTypes/Courses";
import { OPERATE_TEACHER_ERROR, OPERATE_TEACHER_LOADING, OPERATE_TEACHER_SUCCESS } from "../constants/otherActionTypes/TeacherManagement";
const initialState = {
  isLoading: false,
  classData: null,
};

export const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    // Teacher Management
    case OPERATE_TEACHER_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_TEACHER_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_TEACHER_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    // Course

    case OPERATE_COURSE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_COURSE_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
