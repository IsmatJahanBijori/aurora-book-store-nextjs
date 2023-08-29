import Product from "../../model/Product";
import connectDB from "../../database/connection";

const handler = async (req, res) => {
    if (req.method == "POST") {
        // console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let newProduct = new Product({
                id: req.body[i].id,
                quantity: req.body[i].quantity,
                title: req.body[i].title,
                author: req.body[i].author,
                categories: req.body[i].categories,
                year: req.body[i].year,
                edition: req.body[i].edition,
                language: req.body[i].language,
                description: req.body[i].description,
                cover: req.body[i].cover,
                price: req.body[i].price,
                stock: req.body[i].stock,
            })
            await newProduct.save()
        }
        res.status(400).json({ Success: true })
    }
    else {
        res.status(400).json({ error: "Not Added" })
    }
   
}
export default connectDB(handler)