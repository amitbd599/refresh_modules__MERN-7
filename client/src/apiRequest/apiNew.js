import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

let baseURL = "http://localhost:5000/api";

export const registerOne = async (reqBody) => {
  let result = await axios.post(`${baseURL}/register`, reqBody);
  if (result.data.status === "success") {
    SuccessToast("Register success.");
  } else {
    ErrorToast(result.data.msg);
  }
};

export const apiRequest = async (apiEndPoint, reqBody) => {
  let result = await axios.post(`${baseURL}/${apiEndPoint}`, reqBody);

  return result;
  //   if (result.data.status === "success") {
  //     SuccessToast("Register success.");
  //   } else {
  //     ErrorToast(result.data.msg);
  //   }
};
