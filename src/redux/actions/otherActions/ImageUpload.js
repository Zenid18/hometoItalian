import {
  IMAGE_UPLOAD_ERROR,
  IMAGE_UPLOAD_LOADING,
  IMAGE_UPLOAD_SUCCESS,
} from "src/redux/constants/otherActionTypes/ImageUpload";

export const imageUploadLoading = (isLoading) => ({
  type: IMAGE_UPLOAD_LOADING,
  isLoading: isLoading,
});

export const imageUploadSuccess = (isLoading) => ({
  type: IMAGE_UPLOAD_SUCCESS,
  isLoading: isLoading,
});

export const imageUploadError = (isLoading) => ({
  type: IMAGE_UPLOAD_ERROR,
  isLoading: isLoading,
});
