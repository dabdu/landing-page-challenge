import React from "react";

const Features = () => {
  const data = [
    {
      number: "01",
      title: "Track company-wide progress",
      desc:
        "Manage provides all the functionality your team needs, without the complexity. Our Software is tailor-mase for modern digital product teams"
    },
    {
      number: "02",
      title: "Everything in one place",
      desc:
        "Manage provides all the functionality your team needs, without the complexity. Our Software is tailor-mase for modern digital product teams"
    },
    {
      number: "03",
      title: "Advanced built-in report",
      desc:
        "Manage provides all the functionality your team needs, without the complexity. Our Software is tailor-mase for modern digital product teams"
    }
  ];
  return (
    <div
      className="container flex flex-col px-4
        mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row
        "
    >
      {/* Whats Managed */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about Manage?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our Software is tailor-mase for modern digital product
          teams
        </p>
      </div>
      {/* Numbered Lists */}
      <div className="flex flex-col space-y-8 md:w-1/2">
        {/* List Item 1 */}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            {/* Heading  */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  {item.number}
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  {item.title}
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden text-base font-bold md:mb-4 md:block">
                {item.title}
              </h3>
              <p className="text-darkGrayishBlue">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
