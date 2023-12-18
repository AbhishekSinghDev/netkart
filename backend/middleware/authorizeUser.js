import jwt from "jsonwebtoken";

const authorizeUser = async (req, res, next) => {
  const userProvidedToken = req.headers.authorization;
  console.log(userProvidedToken);
  if (!userProvidedToken || !userProvidedToken.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "no token provided, token cannot be empty",
    });
  }

  try {
    const token = userProvidedToken.split(" ")[1];

    const isAuthorized = jwt.verify(token, process.env.JWT_SECRET);
    req.user_id = isAuthorized.id;
    next();
  } catch (err) {
    if (err.name == "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "unauthorized access" });
    }
    console.log("Error while authorizing user");
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "unable to authorize user, internal server error",
    });
  }
};

export default authorizeUser;
