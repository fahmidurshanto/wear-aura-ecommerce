import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   products: [],
   selectedItems: 0,
   totalPrice: 0,
   deliveryPrice: 0,
   grandTotal: 0
}

//  The slice will use the initialState as a default value if state is not defined
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            const isExist = state.products.find((product)=> product._id === action.payload._id);
            if(!isExist){
                state.products.push({...action.payload, quantity: 1})
            }
            else{
                alert("Items already added");
            }
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.deliveryPrice = setDeliveryPrice(state);
            state.grandTotal = setGrandTotal(state);
        },
        updateQuantity: (state, action) =>{
            const products = state.products.map((product) => {
                if(product._id === action.payload.id){
                    if(action.payload.type === "increment"){
                        product.quantity += 1;
                    }
                    else if(action.payload.type === "decrement"){
                        if(product.quantity > 1){
                            product.quantity -= 1;
                        }
                    }
                }
                return product;
            });

            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.deliveryPrice = setDeliveryPrice(state);
            state.grandTotal = setGrandTotal(state);
        },
        removeFromCart: (state, action) =>{
            state.products = state.products.filter((product) => product._id !== action.payload.id);
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.deliveryPrice = setDeliveryPrice(state);
            state.grandTotal = setGrandTotal(state);
        },
        clearCart: (state)=>{
            state.products = [];
            state.selectedItems = 0;
            state.totalPrice = 0;
            state.deliveryPrice = 0;
            state.grandTotal = 0;
        }
    }
})

// Utilities function
export const setSelectedItems = (state) => state.products.reduce((total, product) =>{
    return Number(total + product.quantity)
},0)

export const setTotalPrice = (state) => state.products.reduce((total, product) =>{
    return Number(total + product.quantity * product.price)
},0)

export const setDeliveryPrice = (state) =>{
    return Number(state.totalPrice > 1000 ? 0 : 50);
}

export const setGrandTotal = (state) => {
    return setTotalPrice(state) + setDeliveryPrice(state.deliveryPrice)
}

export const {addToCart, updateQuantity, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;