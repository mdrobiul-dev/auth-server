import { getUser } from "../services/user.service.js";
import catchAsync from "../utils/catchAsync.js";
import { successResponse } from "../utils/apiResponse.js";

export const getMe = catchAsync(async (req, res, next) => {
  const user = await getUser(req.user.id);

  successResponse(res, "profile fetched succesfully", user);
});

export const updateUserProfile = catchAsync(async (req, res, next) => {
  const user = await getUser(req.user.id, req.body);

  successResponse(res, "profile updated succesfully", user);
});
