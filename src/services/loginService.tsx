import { API } from "../config/api.config";
import { PathApi } from "../config/api.path.config";

export function SocialLogin(request: any) {
  console.log("request", request);

  return API.post(PathApi.socialLogin, request)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      return {
        error,
      };
    });
}

export function LoginUser(request: any) {
  return API.post(PathApi.login, request)
    .then((data: any) => data)
    .catch((error: any) => {
      console.log(request);
      return error.response;
    });
}

export function MobileLogin(request: any) {
  return API.post(PathApi.verifyOTP, {
    mobile: request.mobile,
    otp: request.otp,
    accountType: "mobile",
    callingCode: request.callingCode,
    countryCode: request.countryCode,
  })
    .then((data: any) => data)
    .catch((error: any) => {
      return error.response;
    });
}
