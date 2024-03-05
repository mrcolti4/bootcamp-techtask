import express from "express";
import { signup } from "./user-contorller.js";
import { userRegisterSchema } from "./models/User.js";

const validateBody = (schema) => {
  const func = async (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(new Error(error.message));
    }
    next();
  };
  return func;
};

const authRouter = express.Router();

const validateRegister = validateBody(userRegisterSchema);

authRouter.post("/signup", validateRegister, signup);

export default authRouter;
