import React from "react";
import Image from "../img/avatar-anisha.png";
const Testimonials = () => {
  const data = [
    {
      name: "Ibrahim Dauda",
      src: Image,
      desc:
        "Setting up Tailwind with PostCSS can be a bit different across different build tools. Check our framework guides to see if we have more specific instructions for your particular setup."
    },
    {
      name: "Ibrahim Dauda",
      src: Image,
      desc:
        "Setting up Tailwind with PostCSS can be a bit different across different build tools. Check our framework guides to see if we have more specific instructions for your particular setup."
    },
    {
      name: "Ibrahim Dauda",
      src: Image,
      desc:
        "Setting up Tailwind with PostCSS can be a bit different across different build tools. Check our framework guides to see if we have more specific instructions for your particular setup."
    }
  ];
  return (
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">
        What's Different About Manage?
      </h2>
      {/* Testimonials Container */}
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        {/* Testimonial 1 */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray mb-16 md:mb-10 md:w-1/3"
          >
            <img src={item.src} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">{item.name}</h5>
            <p className="text-sm text-darkGrayishBlue">{item.desc}</p>
          </div>
        ))}
      </div>
      <button
        className="p-3 px-6 pt-2 text-white bg-brightRed
                rounded-full baseline hover:bg-brightRedLight"
      >
        Get Started
      </button>
    </div>
  );
};

export default Testimonials;
