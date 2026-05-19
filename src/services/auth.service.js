import AppError from "../errors/AppError.js";
import User from "../models/user.model.js";

export
 const registerUser = async (userData) => {
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

  return {user : userRespone, token}
};
