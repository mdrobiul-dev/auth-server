import AppError from "../errors/AppError.js";
import User from "../models/user.model.js";
import { HTTP_STATUS } from "../utils/constant.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("User with this email already exist", 400);
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = await user.generateToken();

  const userRespone = user.toObject();
  delete userRespone.password;

  return { user: userRespone, token };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    throw new AppError("Invalid email or password", HTTP_STATUS.UNAUTHORIZE);
  }

  const token = await user.generateToken();

  const userResponse = user.toObject();
  delete userResponse.password;

  return { user: userResponse, token };
};
