import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartModal from "../pages/Shop/CartModal";

const Navbar = () => {

  const products = useSelector((state)=> state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () =>{
    setIsCartOpen(!isCartOpen);
  };



  const navLinks = (
    <>
      <Link className=" m-2 hover:text-primary" to="/">
        Home
      </Link>
      <Link className=" m-2 hover:text-primary" to="/shop">
        Shop
      </Link>
      <Link className=" m-2 hover:text-primary" to="/products">
        Products
      </Link>
      <Link className=" m-2 hover:text-primary" to="/cart">
        Cart
      </Link>
    </>
  );

  return (
    <div className="flex items-center justify-between p-8">
      {/* Logo */}
      <h1 className="font-bold text-3xl cursor-pointer">
        <Link to="/">Wear Aura</Link>
      </h1>

      {/* navlinks */}
      <div>
        {/* Desktop view navLinks */}
        <ul className="hidden md:flex items-center gap-3">{navLinks}</ul>
        {/* Mobile view  navLinks */}
        <div className="drawer drawer-center z-50 md:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button cursor-pointer"
            >
              <i className="ri-menu-line hover:text-primary"></i>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              {/* profile and search section */}
              <span className="flex items-center justify-center gap-3">
                <Link to="/search">
                  <i className="ri-search-line hover:text-primary"></i>
                </Link>
                <div>
                  <button onClick={handleCartToggle}>
                    <i className="ri-shopping-cart-2-line hover:text-primary"></i>
                  </button>
                  <sup className="text-xs bg-primary text-white rounded-full px-0.5 font-bold border">
                   {products.length}
                  </sup>
                </div>
                <Link to="/profile">
                  <i className="ri-user-line hover:text-primary"></i>
                </Link>
              </span>
              <hr className="my-10" />
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
      {/* profile and search section */}
      <span className="hidden md:flex items-center justify-center gap-3">
        <Link to="/search">
          <i className="ri-search-line hover:text-primary"></i>
        </Link>
        <div>
          <button onClick={handleCartToggle}>
            <i className="ri-shopping-cart-2-line hover:text-primary"></i>
          </button>
          <sup className="text-xs bg-primary text-white rounded-full px-0.5 font-bold border">
           {products.length}
          </sup>
        </div>
        <Link to="/profile">
          <i className="ri-user-line hover:text-primary"></i>
        </Link>
      </span>

      {
        isCartOpen && <CartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle}></CartModal>
      }
    </div>
  );
};

export default Navbar;
