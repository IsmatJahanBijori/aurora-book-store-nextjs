import Product from "../../model/Product";
import connectDB from "../../database/connection";

const handler = async (req, res) => {
    if (req.method == "POST") {
        // console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let newProduct = new Product.findByIdAndUpdate(req.body[i].id, req.body[i])
            console.log(newProduct)
        }
        res.status(400).json({ Success: true })
    }
    else {
        res.status(400).json({ error: "Not Added" })
    }
   
}
export default connectDB(handler)
// import Product from "../../model/Product";
// import connectDB from "../../database/connection";

// const handler = async (req, res) => {
//     if (req.method == "POST") {
//         try {
//             const products = req.body;
//             const newProducts = [];

//             for (let i = 0; i < products.length; i++) {
//                 const newProduct = new Product(products[i]);
//                 await newProduct.save();
//                 newProducts.push(newProduct);
//                 console.log(newProducts)
//             }

//             res.status(200).json({ success: true, data: newProducts });
//         } catch (error) {
//             res.status(400).json({ error: "Failed to add products", details: error.message });
//         }
//     } else {
//         res.status(400).json({ error: "Invalid request method" });
//     }
// };

// export default connectDB(handler);
