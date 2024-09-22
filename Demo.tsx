import React from "react";

const FAQ = () => {
  return (
    <div
      className="relative py-20 text-white"
      style={{
        backgroundImage: 'url("faq.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ background: "#00000066" }}
      />
      <div className="relative z-10 text-center">
        <h3 className="text-5xl font-bold">Frequently Asked Questions </h3>
        <p className="text-xl py-6">
          Explore your question to let us know more
        </p>

        <div className="flex">
          <div
            style={{
              backgroundImage: 'url("faq2.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div>asd</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;