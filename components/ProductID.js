// Assuming you have a mongoose model for your products
const Product = require('../model/Product'); // Replace with your actual model import

async function getProductById(id) {
  try {
    const product = await Product.findOne({ id }).exec();
    return product;
  } catch (error) {
    console.error('Error fetching product by id:', error);
    throw error;
  }
}

module.exports = { getProductById };
