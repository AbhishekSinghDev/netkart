import Product from "../models/productModel.js";

const getAllProducts = async (req, res) => {
  try {
    const response = await Product.find({});
    res.status(201).json({
      success: true,
      products: response,
    });
  } catch (err) {
    console.log("Error while fetching all products");
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to fetch all products, internal server error",
    });
  }
};
const getSingleProduct = async (req, res) => {
  const id = req.query.id;

  if (!id) {
    res
      .status(400)
      .json({ success: false, message: "Please provide id of the product" });
    return;
  }

  try {
    const response = await Product.findById(id);
    res.status(201).json({
      success: true,
      product: response,
    });
  } catch (err) {
    console.log("Error while fetching single product");
    console.log(err);
    res.status(500).json({
      success: false,
      message: "unable to fetch single product, internal server error",
    });
  }
};
const getAllCategories = async (req, res) => {
  try {
    const response = await Product.distinct("category");
    res.status(201).json({
      success: true,
      categories: response,
    });
  } catch (err) {
    console.log("Error while fetching categories");
    console.log(err);
    res.status(500).json({
      success: true,
      message: "unable to fetch all categories, internal server error",
    });
  }
};

export { getAllProducts, getSingleProduct, getAllCategories };
