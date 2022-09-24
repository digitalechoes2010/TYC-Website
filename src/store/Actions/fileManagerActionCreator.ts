import { FileUploadConstant } from "../ActionTypes/fileManager.types.d";

export const fileUploadRequest = (payload: any): any => {
  return {
    type: FileUploadConstant.FILE_UPLOAD_REQUEST,
    files: payload.files,
  };
};
export const fileUploadSuccess = (message: any): any => ({
  type: FileUploadConstant.FILE_UPLOAD_SUCCESS,
  message: message,
});

export const fileUploadError = (message: any): any => ({
  type: FileUploadConstant.FILE_UPLOAD_ERROR,
  message: message,
});
export const fetchFilesRequest = (): any => {
  return {
    type: FileUploadConstant.FETCH_FILES_REQUEST,
  };
};
export const fetchFilesSuccess = (fileList: Array<object>): any => {
  return {
    type: FileUploadConstant.FETCH_FILES_SUCCEED,
    fileList: fileList,
  };
};
