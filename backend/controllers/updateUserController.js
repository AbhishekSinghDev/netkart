import User from "../models/userModel.js";
import bcrypt from "bcrypt";

const updatePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  // check if weither the password field is not empty
  if (!email || !oldPassword || !newPassword) {
    res
      .status(400)
      .json({ success: false, message: "please provide all the credentials" });
  }

  const user = await User.findOne({ email: email });

  // check if user exists or not
  if (!user)
    return res.status(400).json({
      success: false,
      message: "no user exists with the provided email",
    });

  bcrypt.compare(oldPassword, user.password, async (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "unable to update password, internal server error",
      });
    }

    if (result) {
      const saltRounds = 10;
      bcrypt.hash(newPassword, saltRounds, async (err, hash) => {
        if (err) {
          console.log(
            "error while generating salt after previous password check is passed: ",
            err
          );
          res
            .status(500)
            .json({ success: false, message: "unable to update password" });
        }
        user.password = hash;
        user.save();

        res
          .status(201)
          .json({ success: true, message: "password updated successfully" });
      });
    } else {
      res.status(400).json({ success: false, message: "wrong credentials" });
    }
  });

  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to update password, internal server error",
    });
  }
};

const updateEmail = async (req, res) => {
  const { oldEmail, newEmail, password } = req.body;

  // check for email and password is not empty
  if (!oldEmail || !newEmail || !password) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all the fields" });
  }

  try {
    const isuser = await User.findOne({ email: oldEmail });

    // check weither user exists or not
    if (!isuser)
      return res.status(400).json({
        success: false,
        message: "no account find with the provided email",
      });

    bcrypt.compare(password, isuser.password, async (err, result) => {
      if (err) {
        console.log("error in updating user email: ", err);
        return res.status(500).json({
          success: false,
          message: "unable to update email, internal server error",
        });
      }

      if (result) {
        isuser.email = newEmail;
        await isuser.save();

        return res
          .status(201)
          .json({ success: true, message: "email updated successfully" });
      } else {
        return res.status(401).json({
          success: false,
          message: "unauthorized access, wrong credentials",
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to update email, internal server error",
    });
  }
};

const updateAddress = async (req, res) => {
  const { newAddress, password, email } = req.body;

  // check for email and password is not empty
  if (!newAddress || !password || !email) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all the fields" });
  }

  try {
    const isuser = await User.findOne({ email: email });

    // check weither user exists or not
    if (!isuser)
      return res.status(400).json({
        success: false,
        message: "no account find with the provided address",
      });

    bcrypt.compare(password, isuser.password, async (err, result) => {
      if (err) {
        console.log("error in updating user email: ", err);
        return res.status(500).json({
          success: false,
          message: "unable to update address, internal server error",
        });
      }

      if (result) {
        isuser.address = newAddress;
        await isuser.save();

        return res
          .status(201)
          .json({ success: true, message: "address updated successfully" });
      } else {
        return res.status(401).json({
          success: false,
          message: "unauthorized access, wrong credentials",
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to update address, internal server error",
    });
  }
};

const updatePhoneno = async (req, res) => {
  const { newPhoneno, password, email } = req.body;

  // check for email and password is not empty
  if (!newPhoneno || !password || !email) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all the fields" });
  }

  try {
    const isuser = await User.findOne({ email: email });

    // check weither user exists or not
    if (!isuser)
      return res.status(400).json({
        success: false,
        message: "no account find with the provided email",
      });

    bcrypt.compare(password, isuser.password, async (err, result) => {
      if (err) {
        console.log("error in updating user address: ", err);
        return res.status(500).json({
          success: false,
          message: "unable to update address, internal server error",
        });
      }

      if (result) {
        isuser.phoneno = newPhoneno;
        await isuser.save();

        return res
          .status(201)
          .json({ success: true, message: "phoneno updated successfully" });
      } else {
        return res.status(401).json({
          success: false,
          message: "unauthorized access, wrong credentials",
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to update phoneno, internal server error",
    });
  }
};

export { updatePassword, updateEmail, updateAddress, updatePhoneno };
