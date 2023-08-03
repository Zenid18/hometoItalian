import {
  OPERATE_CMS_ERROR,
  OPERATE_CMS_LOADING,
  OPERATE_CMS_SUCCESS,
} from "../constants/otherActionTypes/Cms";
import {
  OPERATE_DASHBOARD_ERROR,
  OPERATE_DASHBOARD_LOADING,
  OPERATE_DASHBOARD_SUCCESS,
} from "../constants/otherActionTypes/Dashboard";
 

import {
  OPERATE_RATINGS_ERROR,
  OPERATE_RATINGS_LOADING,
  OPERATE_RATINGS_SUCCESS,
} from "../constants/otherActionTypes/Ratings";
import {
  OPERATE_SETTINGS_ERROR,
  OPERATE_SETTINGS_LOADING,
  OPERATE_SETTINGS_SUCCESS,
} from "../constants/otherActionTypes/Settings";
import {
  OPERATE_REPORTS_ERROR,
  OPERATE_REPORTS_LOADING,
  OPERATE_REPORTS_SUCCESS,
} from "../constants/otherActionTypes/Reports";
import {
  OPERATE_REVENUE_ERROR,
  OPERATE_REVENUE_LOADING,
  OPERATE_REVENUE_SUCCESS,
} from "../constants/otherActionTypes/Revenue";
import {
  OPERATE_SUB_ADMIN_ERROR,
  OPERATE_SUB_ADMIN_LOADING,
  OPERATE_SUB_ADMIN_SUCCESS,
} from "../constants/otherActionTypes/SubAdmin";

import {
  IMAGE_UPLOAD_ERROR,
  IMAGE_UPLOAD_LOADING,
  IMAGE_UPLOAD_SUCCESS,
} from "../constants/otherActionTypes/ImageUpload";
import {
  OPERATE_NOTIFICATION_ERROR,
  OPERATE_NOTIFICATION_LOADING,
  OPERATE_NOTIFICATION_SUCCESS,
} from "../constants/otherActionTypes/Notifications";

import {
  OPERATE_FAQ_ERROR,
  OPERATE_FAQ_LOADING,
  OPERATE_FAQ_SUCCESS,
} from "../constants/otherActionTypes/Faq";

import {
  OPERATE_ROLE_ERROR,
  OPERATE_ROLE_LOADING,
  OPERATE_ROLE_SUCCESS,
} from "../constants/otherActionTypes/Role";
import {
  OPERATE_TRANSATIONS_ERROR,
  OPERATE_TRANSATIONS_LOADING,
  OPERATE_TRANSATIONS_SUCCESS,
} from "../constants/otherActionTypes/Transactions";
import {
  OPERATE_OFFERS_ERROR,
  OPERATE_OFFERS_LOADING,
  OPERATE_OFFERS_SUCCESS,
} from "../constants/otherActionTypes/Offers";
import { OPERATE_STUDENT_ERROR, OPERATE_STUDENT_LOADING, OPERATE_STUDENT_SUCCESS } from "../constants/otherActionTypes/Students";
import { OPERATE_TEACHER_ERROR, OPERATE_TEACHER_LOADING, OPERATE_TEACHER_SUCCESS } from "../constants/otherActionTypes/TeacherManagement";
const initialState = {
  isLoading: false,
  classData: null,
};

export const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPERATE_CMS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_CMS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_CMS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_DASHBOARD_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_DASHBOARD_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

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

    case OPERATE_STUDENT_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_STUDENT_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_RATINGS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_RATINGS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_RATINGS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_SETTINGS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_SETTINGS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_REPORTS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_REPORTS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_REPORTS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_REVENUE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_REVENUE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_REVENUE_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_SUB_ADMIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_SUB_ADMIN_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_SUB_ADMIN_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case IMAGE_UPLOAD_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case IMAGE_UPLOAD_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_FAQ_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_FAQ_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_FAQ_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_NOTIFICATION_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_NOTIFICATION_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_ROLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case OPERATE_ROLE_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_TRANSATIONS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_TRANSATIONS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_TRANSATIONS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_OFFERS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_OFFERS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case OPERATE_OFFERS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};
