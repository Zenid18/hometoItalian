import {
  OPERATE_OFFERS_ERROR,
  OPERATE_OFFERS_LOADING,
  OPERATE_OFFERS_SUCCESS,
} from "src/redux/constants/otherActionTypes/Offers";

//offers
export const operateOffersLoading = (isLoading) => ({
  type: OPERATE_OFFERS_LOADING,
  isLoading: isLoading,
});
export const operateOffersSuccess = (isLoading) => ({
  type: OPERATE_OFFERS_SUCCESS,
  isLoading: isLoading,
});
export const operateOffersError = (isLoading) => ({
  type: OPERATE_OFFERS_ERROR,
  isLoading: isLoading,
});
