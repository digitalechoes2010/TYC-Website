import { API } from "../config/api.config";
import { PathApi } from "../config/api.path.config";

export default function getProductsApi() {
  return API.get(PathApi.product)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      return {
        error,
      };
    });
}
