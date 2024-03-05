import { User } from "./models/User.js";

export const signup = async (req, res) => {
  const { email, name, password } = req.body;

  const newUser = await User.create({
    email,
    password,
    name,
  });

  res.status(201).json({
    email,
    name,
    password,
  });
};
