import { storageKey, getData } from "src/constants/storage";
import * as url from "../../../constants/urls";
import * as Service from "../../../constants/service";
import {
  operateOffersError,
  operateOffersLoading,
  operateOffersSuccess,
} from "src/redux/actions/otherActions/Offers";

// Offers Api's
export const addOffer = (body) => async (dispatch) => {
  dispatch(operateOffersLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.post(`${url.GET_OFFERS}`, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateOffersSuccess(false));
      console.log(response, "ADD_OFFER-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateOffersError(false));
    return { message: error };
  }
};

export const editOffer = (body, id) => async (dispatch) => {
  dispatch(operateOffersLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.put(`${url.GET_OFFERS}/${id}`, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateOffersSuccess(false));
      console.log(response, "EDIT_OFFER-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateOffersError(false));
    return { message: error };
  }
};

export const getOffers = (page, query) => async (dispatch) => {
  dispatch(operateOffersLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(
      `${url.GET_OFFERS}?page=${page + 1}&limit=10&search=${query}`,
      token
    );
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateOffersSuccess(false));
      console.log(response, "GET_OFFERS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateOffersError(false));
    return { message: error };
  }
};

export const getOneOffer = (id) => async (dispatch) => {
  dispatch(operateOffersLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(`${url.GET_OFFERS}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateOffersSuccess(false));
      console.log(response, "GET_ONE_OFFER-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateOffersError(false));
    return { message: error };
  }
};
export const ChangeOfferStatus = (id) => async (dispatch) => {
  dispatch(operateOffersLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(`${url.OFFER_STATUS}/${id}`, token);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateOffersSuccess(false));
      console.log(response, "OFFER_STATUS-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateOffersError(false));
    return { message: error };
  }
};
export const deleteOffer = (body) => async (dispatch) => {
  dispatch(operateOffersLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.deleteApi(`${url.GET_OFFERS} `, token, body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(operateOffersSuccess(false));
      console.log(response, "DELETE_OFFER-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(operateOffersError(false));
    return { message: error };
  }
};
