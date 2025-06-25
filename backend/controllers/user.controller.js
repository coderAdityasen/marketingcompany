import { User } from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, resp) => {
  try {
    const { username, email, fullName, password } = req.body;

    // Check if all required fields are provided
    if (
      ![username, email, fullName, password].every(
        (field) => field.trim() !== ""
      )
    ) {
      return resp.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return resp.status(409).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      fullName,
      password: hashPassword,
    });
    // Save the new user to the database
    const savedUser = await newUser.save();

    return resp
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        data: savedUser,
      });
  } catch (error) {
    resp.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const login = async (req, resp) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  try {
    const user = await User.findOne({ email });
    console.log(user);
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched ) {
      console.log("invalid");
      return resp.status(400).json({ message: "Invalid username or password" });
    }
    
     console.log(user);
     
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.REFRESH_TOKEN_SECRET
    );
    user.refreshToken = refreshToken;
   
    await user.save();

    const options = {
      httpOnly: true,
      secure: true
  }

  console.log("complete");
  
    return resp
      .status(200)
      .cookie("refreshToken", refreshToken , options)
      .cookie("accessToken", accessToken , options)
      .json({
        message: "user login successfully",
        data: {
          _id: user._id,
          username: user.username,
          fullname: user.fullName,
          email: user.email,
          isAdmin: user.isAdmin,
          avatar: user.avatar,
          accessToken: accessToken,
          refreshToken: refreshToken,
        },
      });
  } catch (error) {
    console.log(error)
    resp.status(400).json({message : "user not found"})
  }
};