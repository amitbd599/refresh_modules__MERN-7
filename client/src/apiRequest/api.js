import axios from "axios";
import { DeleteAlert, ErrorToast, SuccessToast } from "../helper/helper";

// let baseURL = "http://localhost:5000/api";
let baseURL = "https://refresh-modules-api.amitjs.com/api";

class ApiCall {
  async register(reqBody) {
    let result = await axios.post(`${baseURL}/register`, reqBody);
    if (result.data.status === true) {
      SuccessToast(result.data.msg);
      return true;
    } else {
      ErrorToast(result.data.msg);
      return false;
    }
  }

  async login(reqBody) {
    let result = await axios.post(`${baseURL}/login`, reqBody, {
      withCredentials: true,
    });
    if (result.data.status === true) {
      SuccessToast(result.data.msg);
      return true;
    } else {
      ErrorToast(result.data.msg);
      return false;
    }
  }

  async logout() {
    let result = await axios.get(`${baseURL}/logout`, {
      withCredentials: true,
    });
    if (result.data.status === true) {
      SuccessToast(result.data.msg);
      return true;
    } else {
      ErrorToast(result.data.msg);
      return false;
    }
  }
  async verify() {
    let result = await axios.get(`${baseURL}/verify-auth`, {
      withCredentials: true,
    });
    if (result.data.status === true) {
      return true;
    } else {
      ErrorToast(result.data.msg);
      return false;
    }
  }

  async fileUpload(reqBody) {
    let result = await axios.post(`${baseURL}/file-upload`, reqBody, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (result.data.status === true) {
      SuccessToast(result.data.msg);
      return result;
    } else {
      ErrorToast(result.data.msg);
      return false;
    }
  }
  async createProduct(reqBody) {
    let result = await axios.post(`${baseURL}/create-product`, reqBody, {
      withCredentials: true,
    });
    if (result.data.status === true) {
      SuccessToast(result.data.msg);
      return true;
    } else {
      ErrorToast(result.data.msg);
      return false;
    }
  }
  async getAllProduct() {
    let result = await axios.get(`${baseURL}/all-product`, {
      withCredentials: true,
    });
    if (result.data.status === true) {
      return result?.data?.data;
    } else {
      ErrorToast(result.data.msg);
      return false;
    }
  }
  async deleteProduct(id) {
    let isConfirmed = await DeleteAlert();

    console.log(isConfirmed);

    if (isConfirmed) {
      let result = await axios.delete(`${baseURL}/delete-product/` + id, {
        withCredentials: true,
      });
      if (result.data.status === true) {
        SuccessToast(result.data.msg);
        return true;
      } else {
        ErrorToast(result.data.msg);
        return false;
      }
    }
  }
}

export const {
  register,
  login,
  logout,
  createProduct,
  getAllProduct,
  fileUpload,
  deleteProduct,
  verify,
} = new ApiCall();
