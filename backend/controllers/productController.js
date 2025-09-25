const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      success: true,
      data: allProducts,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ success: false, message: "ID is required" });

  try {
    const product = await Product.findById(id);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add product
const addProduct = async (req, res) => {
  const { name, category, image,drive,power } = req.body;

  if (!name || !category  || !image||!drive||!power)
    return res
      .status(400)
      .json({ success: false, message: "All the fields are necessary" });

  try {
    const newProduct = new Product({
      name,
      category,
      image,
      drive,power
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update product by ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ success: false, message: "ID is required" });

  const { name, category, image,drive,power } = req.body;

  if (!name || !category  || !image||!drive||!power)
    return res
      .status(400)
      .json({ success: false, message: "All the fields are necessary" });

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, category, image,drive,power },
      { new: true }
    );

    if (!updatedProduct)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete product by ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).json({ success: false, message: "ID is required" });

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
