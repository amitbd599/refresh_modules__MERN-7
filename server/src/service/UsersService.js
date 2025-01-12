import UserModel from "../model/UserModel.js";

export const registerService = async (req) => {
  try {
    let reqBody = req.body;
    let existingUser = await UserModel.find({ email: reqBody.email });
    console.log(existingUser);

    if (existingUser.length > 0) {
      return { status: "error", msg: "User exist" };
    }

    let data = await UserModel.create(reqBody);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e };
  }
};
