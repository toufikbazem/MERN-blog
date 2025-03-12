import jwt from "jsonwebtoken";
import { ErrorHandler } from "./error.js";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(ErrorHandler(401, "Unauthorized"));
  }
  jwt.verify(token, process.env.JWTSECRET, (err, user) => {
    if (err) {
      return next(ErrorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
