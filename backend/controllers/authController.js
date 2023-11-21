import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const signupUser = async (req, res) => {
  const { username, email, password, address, phoneno } = req.body;

  // check weither any of the above field is not empty
  if (!username || !email || !password || !address || !phoneno) {
    res.status(404).json({
      success: false,
      message: "please provide all the details",
    });
  }

  // check is user already exists or not ?
  const isUserExists = await User.find({ email: email });

  if (!isUserExists) {
    res.status(400).json({
      success: false,
      message: "there is already a account with provided email address",
    });
  }

  try {
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.log("error while hashing password: ", err);
        res.status(500).json({
          success: false,
          message: "unable to signup user, internal server error",
        });
      } else {
        const newUser = new User({
          username: username,
          email: email,
          password: hash,
          address: address,
          phoneno: phoneno,
        });

        await newUser.save();
        res.status(201).json({
          success: true,
          message: "user signed up successfully",
          user: newUser,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to sign up user. internal server error",
    });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check weither any of the field is empty
  if ((!email, !password)) {
    res
      .status(400)
      .json({ success: false, message: "please provide email and password" });
  }

  // check if userexists or registered or not
  try {
    const isUserExists = await User.findOne({ email: email });

    if (!isUserExists) {
      res.status(400).json({
        success: false,
        message: "there is no user with provided email",
      });
    } else {
      bcrypt.compare(password, isUserExists.password, (err, result) => {
        if (err) {
          console.log("error while hashing password (login): ", err);
          res
            .status(500)
            .json({ success: false, message: "unable to login user" });
        }

        if (result) {
          res
            .status(201)
            .json({
              success: true,
              message: "login successfull",
              user: isUserExists,
            });
        } else {
          res.status(401).json({
            success: false,
            message: "unauthorized acess, wrong credentials",
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to login, internal server error",
    });
  }
};

export { loginUser, signupUser };
