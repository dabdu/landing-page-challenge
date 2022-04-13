import React from "react";
import Logo from "../img/logo-white.svg";
import facebook from "../img/icon-facebook.svg";
import youtube from "../img/icon-youtube.svg";
import twitter from "../img/icon-twitter.svg";
import pinterest from "../img/icon-pinterest.svg";
import instagram from "../img/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue">
      {/* Flex Conatainer */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and Social Links */}
        <div
          className="flex flex-col-reverse items-center 
        justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img src={Logo} className="h-8" alt="" />
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {/* Link1 */}
            <span>
              <img src={facebook} alt="" />
            </span>
            {/* Link2 */}
            <span>
              <img src={youtube} alt="" />
            </span>
            {/* Link3 */}
            <span>
              <img src={twitter} alt="" />
            </span>
            {/* Link4 */}
            <span>
              <img src={pinterest} alt="" />
            </span>
            {/* Link5 */}
            <span>
              <img src={instagram} alt="" />
            </span>
          </div>
        </div>

        {/* List container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <span className="hover:text-brightRed">Home</span>
            <span className="hover:text-brightRed">Pricing</span>
            <span className="hover:text-brightRed">Products</span>
            <span className="hover:text-brightRed">About</span>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <span className="hover:text-brightRed">Careers</span>
            <span className="hover:text-brightRed">Community</span>
            <span className="hover:text-brightRed">Privacy Policy</span>
          </div>
        </div>
        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Update in your Inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
