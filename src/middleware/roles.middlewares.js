import AppError from "../errors/AppError.js";

export const restricTo = (...roles) => {
    return () => {
        if(!roles.includes(req.user.role)) {
            throw new AppError("You do not have permission to perform this action", 403)
        }
        next()
    }
}