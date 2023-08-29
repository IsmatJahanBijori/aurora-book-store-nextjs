import Product from "../../model/Product";
import connectDB from "../../database/connection";

const handler = async (req, res) => {
    let products = await Product.find()
    
    res.status(200).json({ products })
}
export default connectDB(handler)