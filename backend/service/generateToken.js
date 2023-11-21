import jwt from "jsonwebtoken";

const generateToken = (user_id) => {
  try {
    const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    return token;
  } catch (err) {
    console.log("Error while creating token");
    console.log(err);
  }
};

export default generateToken;
