const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userID: {
        type: String, required: true
    },
    products: [
        {
            id: {
                type: String,
                required: true,
                unique: true,
            },
            quantity: { type: Number, default: 1 },
            address: { type: String, required: true },
            amount: { type: Number, required: true },
            status: { type: String, default: "Pending", required: true },

        }
    ]
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', orderSchema)

{/**  title: {
                type: String,
                required: true,
            },
            author: {
                type: String,
                required: true,
            },
            categories: {
                type: String,
                required: true,
            },
            year: String,
            edition: String,
            language: String,
            description: String,
            cover: String,
            price: {
                type: Number,
                required: true,
            },
            stock: {
                type: Number,
                required: true,
            }, */}