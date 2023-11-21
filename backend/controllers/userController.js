import User from "../models/userModel.js";

// base_url/api/v1/user:user_id
const getUserDetails = async (req, res) => {
  // token needed to implement to increase security
  const user_id = req.params.user_id;
  if (!user_id) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide user id" });
  }

  try {
    const userInfo = await User.findById(user_id).populate("orders");
    if (userInfo) {
      return res.status(201).json({ success: true, user: userInfo });
    } else {
      return res.status(404).json({
        success: false,
        message: "No user found with provided user id",
      });
    }
  } catch (err) {
    console.log("Error while getting user details");
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to fetch user details, internal server error",
    });
  }
};

export { getUserDetails };
