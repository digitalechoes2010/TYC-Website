import { PathApi } from "../config/api.path.config";
import apiClient from "../config/clients";

export function submitMediaService(files: any) {
  let formData = new FormData();
  formData.append("file", files.postData);

  return apiClient
    .upload(PathApi.fileUpload, formData)
    .then((data) => {
      console.log("media", data);
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err.message;
    });
}
