import { registerUser, loginUser } from "../services/auth.service.js";
import { successResponse } from "../utils/apiResponse.js";
import catchAsync from "../utils/catchAsync.js";
import { HTTP_STATUS } from "../utils/constant.js";

export const register = catchAsync(async (req, res, next) => {
  const { user, token } = await registerUser(req.body);
  successResponse(res, "User created successfully", {user, token}, HTTP_STATUS.CREATED);
});

export const login = catchAsync(async(req, res, next) => {
   const {email , password} = req.body

   const {user, token } = await loginUser(email, password)

   successResponse(res, "Login successfull", {user, token}, HTTP_STATUS.OK)
})
