import apiClient from "../config/clients";
import { API } from "../config/api.config";
import { PathApi } from "../config/api.path.config";

export function SignupUser(request: any) {
  let formData = new FormData();
  formData.append("email", request.email);
  formData.append("password", request.password);
  console.log("request", request);
  return API.post(PathApi.signup + request.otp, {
    email: request.email,
    password: request.password,
  })
    .then((data: any) => data)
    .catch((error: any) => {
      return error.response;
    });
}
