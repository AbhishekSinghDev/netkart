import Order from "../models/orderModel.js";
import User from "../models/userModel.js";

const orderProduct = async (req, res) => {
  const user_id = req.body.user_id;
  const product_id = req.body.product_id;
  const price = req.body.price;
  const quantity = req.body.quantity;

  if (!user_id || !product_id || !price || !quantity) {
    res.status(400).json({
      success: false,
      message: "please provide user_id, product_id, price, quantity",
    });
    return;
  }

  try {
    const newOrder = new Order({
      user_id: user_id,
      product_id: product_id,
      price: price,
      quantity: quantity,
    });

    const response = await newOrder.save();
    // once order is successfull, i m gonna update this order to user collection
    const updateUser = await User.findByIdAndUpdate(
      user_id,
      {
        $push: { orders: [user_id] },
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

export { orderProduct };
