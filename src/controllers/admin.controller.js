import { deleteUser, getAllUser } from "../services/user.service.js";
import { successResponse } from "../utils/apiResponse.js";
import catchAsync from "../utils/catchAsync.js";

export const getUsers = catchAsync(async(req, res, next) => {
    const users = await getAllUser()
    successResponse(res, "Fetched all users", users)
})

export const removeUser = catchAsync(async(req, res, next) => {
    await deleteUser(req.params.id)
     successResponse(res, "User is deleted")
})