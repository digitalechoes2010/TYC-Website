// const BASE_URL_LOCAL = process.env.REACT_APP_API_URI_LOCAL;
// const BASE_URL_LOCAL = process.env.REACT_APP_API_URI;
const BASE_URL_LOCAL = "https://tycapi.eu-gb.mybluemix.net";
//const BASE_URL_LOCAL = "http://192.168.1.18:3000";
console.log("base", BASE_URL_LOCAL);
export const PathApi = {
  BASE_URL: BASE_URL_LOCAL,
  socialLogin: "/users/socialLogin",
  verifyOTP: "/users/verifymobileLogin",
  login: "/users/login",
  mobileLogin: "/sendLoginMobileOtp",
  signup: "/users/signup/",
  category: "/product/categories",
  posts: "/posts",
  product:
    "/products?filter=%7B%0A%22include%22%3A%5B%0A%7B%0A%22relation%22%3A%22categories%22%2C%0A%22scope%22%3A%7B%0A%22fields%22%3A%5B%22id%22%2C%22title%22%5D%0A%7D%0A%7D%0A%5D%0A%7D",
  paypalOrderSuccess: "/paypalorders/",
  update: "/user/update",
  toggle: "/user/toggleDirect",
  profileUpdate: "/user/update/profiles/",
  profileItemUpdate: "/user/update/profiles/item/",
  profileItemDelete: "/user/profiles/item/",
  fileUpload: "/userImageUpload",
  getContactsbyUserId: "/getContactsbyUserId/",
  getNfcUserDetails: "/getNfcUserDetails/",
  searchById: "/user/searchByIdOrUsername",
  analytics: "/scan-nfcsByUserCountWeekly",
  profilesCountOnScan: "/user/update/profilesCountOnScan/item/",
  usersByid: "/usersByid/",
  businessCard: "/user/update/buisnessCard",
  userMediaUpload: "/userMediaUpload/",
  getNfcDetailsBySerialNo: "/getNfcDetailsBySerialNoWithoutUserId/",
  toggleProfileActivation: "/user/toggleProfileActivation",
  changeUserLink: "/user/changeUserLink",
  changeUserName: "/user/changeUserName",
};
