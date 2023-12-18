import Order from "../models/orderModel.js";
import User from "../models/userModel.js";

const orderProduct = async (req, res) => {
  const product_id = req.body.product_id;
  const price = req.body.price;
  const quantity = req.body.quantity;

  if (!product_id || !price || !quantity) {
    res.status(400).json({
      success: false,
      message: "please provide product_id, price, quantity",
    });
    return;
  }

  try {
    const newOrder = new Order({
      user_id: req.user_id,
      product_id: product_id,
      price: price,
      quantity: quantity,
    });

    const response = await newOrder.save();
    console.log(response);
    // once order is successfull, i m gonna update this order to user collection
    const updateUser = await User.findByIdAndUpdate(
      req.user_id,
      {
        $push: { orders: response._id },
      },
      { new: true }
    );

    if (updateUser) {
      res.status(201).json({
        success: true,
        message: "order successfully",
        order: response,
      });
    }
  } catch (err) {
    console.log("Error while ordering the product");
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to order product, internal server error",
    });
  }
};

const orderInfo = async (req, res) => {
  const order_id = req.params.order_id;
  const requesting_user_id = req.user_id;

  if (!order_id) {
    return res
      .status(400)
      .json({ success: false, message: "Order id is not provided" });
  }

  try {
    const orderDetails = await Order.findById(order_id)
      .populate("user_id")
      .populate("product_id");

    // verifying the user is asking order details is the authorized user or not
    if (orderDetails.user_id._id != requesting_user_id) {
      return res.status(400).json({ success: false, message: "invalid token" });
    }

    if (!orderDetails) {
      return res
        .status(404)
        .json({ success: true, message: "no order found with provided id" });
    }
    return res
      .status(200)
      .json({ success: true, message: "order found", order: orderDetails });
  } catch (err) {
    console.log("Error while fetcing order info");
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "unable to find order info, internal server info",
    });
  }
};

export { orderProduct, orderInfo };
