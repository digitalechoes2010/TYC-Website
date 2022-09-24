import axios from "axios";
import { PathApi } from "./api.path.config";

let token = localStorage.getItem("token");
const headers = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: token ? "Bearer " + token : "",
  },
};
export const API = {
  get(path: string) {
    return axios.get(`${PathApi.BASE_URL}${path}`, headers);
  },
  post(path: string, params: any, contentType?: string) {
    return axios.post(`${PathApi.BASE_URL}${path}`, params, headers);
  },
  delete(path: string) {
    return axios.delete(`${PathApi.BASE_URL}${path}`);
  },
  patch(path: string, params: any, contentType?: string) {
    return axios.patch(`${PathApi.BASE_URL}${path}`, params, headers);
  },
};
