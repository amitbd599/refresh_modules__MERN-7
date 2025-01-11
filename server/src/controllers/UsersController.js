import { registerService } from "../service/UsersService.js";

//! Register
export const register = async (req, res) => {
  let result = await registerService(req);
  return res.json(result);
};
