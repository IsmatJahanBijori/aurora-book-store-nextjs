// // pages/api/products/[id].js
// import { getProductById } from '../../../../components/ProductID' // Replace with your actual database fetching logic

// export default async function handler(req, res) {
//   const { id } = req.query;

//   try {
//     const product = await getProductById(id);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     return res.status(200).json(product);
//   } catch (error) {
//     console.error('Error fetching product data:', error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }
