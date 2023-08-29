import React from 'react'
import { FaShoppingBag, FaTrash, FaTrashAlt } from "react-icons/fa";
//TODO: static table

const CartTable = ({ cart, handleAddToCart, handleRemoveFromCart, clearCart, total }) => {
    return (

        <div className="overflow-x-auto">
            <table className="table text-lg">
                {/* head */}
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {Object.keys(cart).length==0 && <div>No Items in the cart</div>}
                    {
                        Object.keys(cart).map((item, index) =>
                            <tr key={index}>
                                <td>
                                    <div className="flex items-center  space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={(cart[item]).cover} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{(cart[item]).title}</div>
                                            <div className="text-sm opacity-50">{(cart[item]).author}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='flex gap-3 items-center'>
                                    <button onClick={handleRemoveFromCart} className="btn btn-ghost btn-lg">-</button>
                                    <span>{(cart[item]).qty}</span>
                                    <button onClick={handleAddToCart} className="btn btn-ghost btn-lg">+</button>
                                </td>
                                <td>$ <span>{item.price}</span></td>

                            </tr>)
                    }
                </tbody>
            </table>
            <div classNam="flex items-center mr-5">
                <button className="ml-5 md:ml-0 lg:mt-2 xl:mt-0 mr-5 text-blue-500 font-semibold inline-flex items-center  border-0 py-2 px-6  bg-[#BEADFA] rounded gap-3"><span><FaShoppingBag /></span>CheckOut</button>
                <button onClick={clearCart} className="ml-5 md:ml-0 lg:mt-2 xl:mt-0  text-blue-500 font-semibold inline-flex items-center  border-0 py-2 px-6  bg-[#BEADFA] rounded gap-3"><span><FaTrash /></span>Clear Cart</button>
            </div>
        </div>
    )
}

export default CartTable
