import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/helper";

let baseURL = "http://localhost:5000/api";

class ApiCall {
  async register(reqBody) {
    let result = await axios.post(`${baseURL}/register`, reqBody);
    if (result.data.status === "success") {
      SuccessToast("Register success.");
      return true;
    } else {
      ErrorToast(result.data.msg);
      return false;
    }
  }
}

export const { register } = new ApiCall();
