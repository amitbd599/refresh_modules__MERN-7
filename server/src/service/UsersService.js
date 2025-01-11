import UserModel from "../model/UserModel.js";

export const registerService = async (req) => {
  try {
    let reqBody = req.body;
    let data = await UserModel.create(reqBody);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};
