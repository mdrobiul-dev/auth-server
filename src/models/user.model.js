import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/index.js";
import { ROLES } from "../utils/constant.js";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name has to be more than 2 character"],
      maxlength: [50, "Name has to be under 50 character"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password has to be more than 2 character"],
      select: false,
    },
    role: {
      type: String,
      enum: [ROLES.ADMIN, ROLES.USER],
      default: ROLES.USER,
    },
  },
  {
    timestamp: true,
  },
);

// password hash

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, config.bycryptSaltRound);
  next();
});

// compare password 

userSchema.methods.comparePassword = async function(candidatePassword) {
 return await bcrypt.compare(candidatePassword, this.password)
}

// generate token

userSchema.methods.generatePassword = async function () {
    return jwt.sign(
        {id : this._id, role : this.role},
        config.jwt.secret,
        {expireIn : config.jwt.expireIN}
    )
}

const User = mongoose.model("User", userSchema)

export default User
