import { Schema, model } from "mongoose";
import Joi from "joi";

export const userRegisterSchema = Joi.object({
  email: Joi.string()
    .pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .min(8)
    .required(),
  name: Joi.string()
    .pattern(/^[a-zA-Z]{3,20}$/)
    .min(3)
    .max(20)
    .required(),
});

const userSchema = Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

export const User = model("user", userSchema);
