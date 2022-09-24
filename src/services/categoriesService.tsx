import { API } from "../config/api.config";
import { PathApi } from "../config/api.path.config";

export default function getCategoryApi() {
  return API.get(PathApi.category)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      return {
        error,
      };
    });
}
