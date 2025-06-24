import { Router } from "express";
import { registerUser , login } from "../controllers/user.controller.js";

const userroute = Router()

userroute.route("/register").post(registerUser);
userroute.route("/login").post( login);

export default userroute;
