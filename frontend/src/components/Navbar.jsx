import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navLinks = (
    <>
      <Link className=" m-2 hover:text-yellow-400" to="/">
        Home
      </Link>
      <Link className=" m-2 hover:text-yellow-400" to="/shop">
        Shop
      </Link>
      <Link className=" m-2 hover:text-yellow-400" to="/products">
        Products
      </Link>
      <Link className=" m-2 hover:text-yellow-400" to="/cart">
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
              className="drawer-button"
            >
              <i class="ri-menu-line"></i>
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
                  <i class="ri-search-line hover:text-primary"></i>
                </Link>
                <div>
                  <Link to="/cart">
                    <i class="ri-shopping-cart-2-line hover:text-primary"></i>
                  </Link>
                  <sup className="text-xs bg-primary text-white rounded-full px-0.5 font-bold border">
                    0
                  </sup>
                </div>
                <Link to="/profile">
                  <i class="ri-user-line hover:text-primary"></i>
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
          <i class="ri-search-line hover:text-primary"></i>
        </Link>
        <div>
          <Link to="/cart">
            <i class="ri-shopping-cart-2-line hover:text-primary"></i>
          </Link>
          <sup className="text-xs bg-primary text-white rounded-full px-0.5 font-bold border">
            0
          </sup>
        </div>
        <Link to="/profile">
          <i class="ri-user-line hover:text-primary"></i>
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
