import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import fetchProducts from "./getproducts.js";

// route handlers
import authHandler from "./routes/auth.js";
import updateUserHandler from "./routes/updateUser.js";
import productHandler from "./routes/product.js";
import orderHandler from "./routes/order.js";
import userHandler from "./routes/user.js";

const PORT = process.env.PORT;
const app = express();

const corsOptions = {
  origin: true,
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/api/v1/auth", authHandler);
app.use("/api/v1/user", updateUserHandler);
app.use("/api/v1/products", productHandler);
app.use("/api/v1/order", orderHandler);
app.use("/api/v1/user/", userHandler);

const connectDB = async () => {
  try {
    const dbconnection = await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected successfully.");
    // fetchProducts();
  } catch (err) {
    console.log(err);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
