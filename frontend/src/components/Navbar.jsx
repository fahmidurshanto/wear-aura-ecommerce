import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navLinks = (
    <>
      <Link className="p-2 m-2 hover:text-green-600" to="/">Home</Link>
      <Link className="p-2 m-2 hover:text-green-600" to="/about">About</Link>
      <Link className="p-2 m-2 hover:text-green-600" to="/">Products</Link>
      <Link className="p-2 m-2 hover:text-green-600" to="/">Cart</Link>
      <Link className="p-2 m-2 hover:text-green-600 btn bg-green-600" to="/login">Login</Link>
    </>
  );

  return (
    <div className="flex items-center justify-between p-8">
      <h1 className="font-bold text-4xl">Wear Aura</h1>
      <div>
        {/* Desktop view navLinks */}
        <ul className="hidden md:flex items-center gap-5">{navLinks}</ul>
        {/* Mobile view  navLinks */}
        <div className="drawer drawer-center md:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn bg-primary-light"
            >
              <GiHamburgerMenu></GiHamburgerMenu>
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
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
