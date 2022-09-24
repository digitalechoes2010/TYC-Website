import { API } from "../config/api.config";
import { PathApi } from "../config/api.path.config";

export default function getPostsApi() {
  return API.get(PathApi.posts)
    .then((data: any) => {
      return data;
    })
    .catch((error: any) => {
      return {
        error,
      };
    });
}
