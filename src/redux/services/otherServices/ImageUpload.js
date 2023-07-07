import * as url from "../../../constants/urls";
import {
  imageUploadError,
  imageUploadLoading,
  imageUploadSuccess,
} from "../../actions/otherActions/ImageUpload";
import * as Service from "../../../constants/service";

export const imageUploadApi = (body) => async (dispatch) => {
  dispatch(imageUploadLoading(true));
  try {
    const response = await Service.uploadImageApi(url.UPLOAD_IMAGE, "", body);
    const message = response.message;
    if (response.statusCode == 200) {
      dispatch(imageUploadSuccess(false));
      console.log(response, "UPLOAD_IMAGE-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(imageUploadError(false));
    return { message: error };
  }
};
