import rateLimiter from "express-rate-limit"
import AppError from "../errors/AppError.js"

export const authLimiter = rateLimiter({
    windowMs : 15 * 60 * 1000,
    max : 15,
    message : {
        status : "fail",
        message : "Too many request from this IP, try again after 15 minutes"
    },
    handler : (req, res, next) => {
         next(new AppError("Too many request from this IP, try again after 15 minutes",429))
    },
    standardHeaders : true,
    legacyHeaders : false,
})

export const apiLimiter = rateLimiter({
    windowMs : 60 * 1000,
    max : 100,
    message : {
        status : "fail",
        message : "Too many request from this IP, try again after few minutes"
    },
       handler : (req, res, next) => {
         next(new AppError("Too many request from this IP, try again after few minutes",429))
    },
    standardHeaders : true,
    legacyHeaders : false,
})