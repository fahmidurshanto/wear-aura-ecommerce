import { useDispatch } from "react-redux";
import OrderSummery from "./ProductDetails/OrderSummery";
import { removeFromCart, updateQuantity } from "../../redux/features/cart/cartSlice";

const CartModal = ({ products, isOpen, onClose }) => {

  const dispatch = useDispatch();

  const handleQuantity = (type, id) =>{
    const payload = {type, id};
    dispatch(updateQuantity(payload))
  }

  const handleRemove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromCart({id}));
  }
  
  return (
   <div className={`fixed z-[1000] inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} style={{transition: "opacity 300ms"}}>
        <div className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${isOpen ? "translate-x-0": "translate-x-full"}`} style={{transition: "transform 300ms cubic-bezier(0.23, 0.46, 0.45, 0.94)"}}>
            <div className="p-4 mt-4">
               <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">Your Cart</h4>
                    <button 
                    onClick={()=> onClose()}
                    className="text-gray-600 hover:text-gray-900"><i className="ri-arrow-left-line bg-black p-1 text-white"></i></button>
               </div>

               {/* Cart details */}
               <div className="cart-items">
                  {
                    products.length === 0 ? <div className="flex justify-center items-center">Your cart is empty</div> : products.map((item, index) => (
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4" key={index}>
                        <div className="flex items-center">
                          <span className="mr-4 px-1 bg-primary rounded-full text-white">
                            {index + 1}
                          </span>
                          <img className="size-12 object-cover mr-4" src={item.image} alt={item.name} />
                          <div>
                            <h5 className="text-lg font-medium">{item.name}</h5>
                            <p className="text-gray-600 text-sm">৳{Number(item.price).toFixed(2)}</p>
                          </div>
                          
                          <div className="flex flex-row md:justify-start justify-end items-center mt-2 gap-2">
                            {/* Minus button */}
                            <button onClick={()=> handleQuantity("decrement", item._id)} className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ml-8"><i className="ri-subtract-fill"></i></button>
                            <span>{item?.quantity}</span>
                            {/* Plus button */}
                            <button onClick={()=> handleQuantity("increment", item._id)} className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white mr-8"><i className="ri-add-line"></i></button>
                            <div className="ml-5">
                              <button 
                              onClick={(e) => handleRemove(e, item._id)}
                              className="text-red-500 hover:text-red-800 mr-4">Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
               </div>

                  {/* Calculation */}
                  {
                    products.length > 0 && (
                      <OrderSummery/>
                    )
                  }

            </div>
        </div>
   </div>
  );
};

export default CartModal;
