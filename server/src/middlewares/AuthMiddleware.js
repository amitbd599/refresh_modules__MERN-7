import { DecodeToken } from "../utility/TokenUtility.js";

export default (req, res, next) => {
  let token = req.cookies["token"];
  let decoded = DecodeToken(token);

  if (decoded === null) {
    res.status(401).json({ status: "fail", message: "Unauthorized" });
  } else {
    let email = decoded.email;

    req.headers.email = email;
    next();
  }
};
