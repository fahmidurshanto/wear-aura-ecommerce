import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/features/cart/cartSlice';

const OrderSummery = () => {
    const products = useSelector((store) => store.cart.products);
    const { selectedItems, totalPrice, deliveryPrice, grandTotal} = useSelector((store)=> store.cart);
    const dispatch = useDispatch();



    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className='bg-primary-light mt-5 rounded text-base'>
            <div className='px-6 py-4 space-y-5'>
                <h2 className='text-xl text-text-dark font-semibold'>Order Summary</h2>
                <p className='text-text-dark mt-2'>Selected Items: {selectedItems}</p>
                <p className='text-text-dark mt-2'>Total Price: ৳{totalPrice.toFixed(2)}</p>
                <p className='text-text-dark mt-2'>Delivery Price: ৳{deliveryPrice.toFixed(2)}</p>
                <h3 className='font-bold mt-2'>Grand Total: ৳{grandTotal.toFixed(2)}</h3>
                <div className='px-4 pb-6'>
                    {/* Cart clear button */}
                    <button onClick={(e)=> {
                        e.stopPropagation();
                        handleClearCart();
                    }} className='bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4'><span className='mr-3'>Clear your cart</span>  <i className="ri-delete-bin-7-line"></i></button>

                    {/* Checkout button */}
                    <button className='bg-green-600 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4'><span className='mr-2'>Proceed to Checkout</span><i className="ri-bank-card-line"></i></button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummery;