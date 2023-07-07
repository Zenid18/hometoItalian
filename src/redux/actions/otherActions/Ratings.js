// Ratings

import {
  OPERATE_RATINGS_ERROR,
  OPERATE_RATINGS_LOADING,
  OPERATE_RATINGS_SUCCESS,
} from "src/redux/constants/otherActionTypes/Ratings";

export const operateRatingsLoading = (isLoading) => ({
  type: OPERATE_RATINGS_LOADING,
  isLoading: isLoading,
});

export const operateRatingsSuccess = (isLoading) => ({
  type: OPERATE_RATINGS_SUCCESS,
  isLoading: isLoading,
});

export const operateRatingsError = (isLoading) => ({
  type: OPERATE_RATINGS_ERROR,
  isLoading: isLoading,
});
