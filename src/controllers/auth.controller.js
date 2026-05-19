import { registerUser } from "../services/auth.service.js";
import { successResponse } from "../utils/apiResponse.js";
import catchAsync from "../utils/catchAsync.js";

export const register = catchAsync(async (req, res, next) => {
  const { user, token } = await registerUser(req.body);
  successResponse(res, "User created successfully", {user, token}, 201);
});
