import { put, takeLatest, call } from "redux-saga/effects";
import { submitMediaService } from "../../../services/fileManagerService";
import {
  fileUploadError,
  fileUploadSuccess,
} from "../../Actions/fileManagerActionCreator";
import { setUserImagedata } from "../../Actions/userActionCreator";
import { FileUploadConstant } from "../../ActionTypes/fileManager.types.d";

function* submitUploadMedia(files: any) {
  try {
    console.log("saga start");

    const filesInfo: any = yield call(submitMediaService, files.files);

    console.log("filesInfo", filesInfo);

    if (filesInfo.status === 200) {
      const { data } = filesInfo;
      console.log("data.url", data.url);

      yield put(setUserImagedata({ profilePic: data.url }));
      yield put(fileUploadSuccess("success"));
    } else {
      yield put(fileUploadError("Failed"));

      // throw new Error('Something Bad Happened');
    }
  } catch (error) {
    yield put(fileUploadError("Failed"));
  }
}
export function* filesWatcher() {
  yield takeLatest(FileUploadConstant.FILE_UPLOAD_REQUEST, submitUploadMedia);
}
