import React, { useState } from "react";
import Image from "../img/logo.svg";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const onMenuClick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img className="" src={Image} alt="" />
        </div>
        {/* Menu Items  */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-darkGrayishBlue">Pricing</li>
          <li className="hover:text-darkGrayishBlue">Product</li>
          <li className="hover:text-darkGrayishBlue">About Us</li>
          <li className="hover:text-darkGrayishBlue">Careers</li>
          <li className="hover:text-darkGrayishBlue">Community</li>
        </ul>
        <button
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed
                rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </button>

        <button
          onClick={onMenuClick}
          className={`${
            mobileMenu ? "open" : ""
          } block hamburger md:hidden focus:outline-none`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden">
          <div className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-10 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
            <span className="hover:text-darkGrayishBlue">Pricing</span>
            <span className="hover:text-darkGrayishBlue">Product</span>
            <span className="hover:text-darkGrayishBlue">About Us</span>
            <span className="hover:text-darkGrayishBlue">Careers</span>
            <span className="hover:text-darkGrayishBlue">Community</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
