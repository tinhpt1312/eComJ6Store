import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 p-4 bg-black text-white text-center">
      <div className="container mx-auto">
        <div className="text-start mt-5 mb-5">
          <h6>Cảm ơn quý khách đã lựa chọn</h6>
        </div>
        <hr className="border-gray-700" />
        <div className="flex flex-wrap text-start">
          <div className="w-full sm:w-1/4 px-4">
            <div className="flex items-center my-2">
              <a className="navbar-brand mb-0 h1 text-2xl font-bold" href="/">
                <i className="bi bi-apple mx-2"></i>ElectroEdge
              </a>
            </div>
            <div className="mt-3 mb-5">
              <span className="text-lg font-light">
                The customer is at the heart of our unique business model, which
                includes design.
              </span>
            </div>
          </div>
          <div className="w-full sm:w-1/12"></div>
          <div className="w-full sm:w-1/6 my-2">
            <h6 className="font-semibold">SHOPPING</h6>
            <div className="mt-4">
              <h6 className="text-secondary mb-3">Technical Store</h6>
              <h6 className="text-secondary mb-3">Trending product</h6>
              <h6 className="text-secondary mb-3">Accessories</h6>
              <h6 className="text-secondary mb-3">Sale</h6>
            </div>
          </div>
          <div className="w-full sm:w-1/6 my-2">
            <h6 className="font-semibold">SHOPPING</h6>
            <div className="mt-4">
              <h6 className="text-secondary mb-3">Contact Us</h6>
              <h6 className="text-secondary mb-3">Payment Methods</h6>
              <h6 className="text-secondary mb-3">Delivery</h6>
              <h6 className="text-secondary mb-3">Return & Exchanges</h6>
            </div>
          </div>
          <div className="w-full sm:w-1/12"></div>
          <div className="w-full sm:w-1/4 my-2">
            <h6>NEWLETTER</h6>
            <div className="mt-3 mb-3">
              <span className="text-lg font-light">
                Be the first to know about new arrivals, look books, sales &
                promos!
              </span>
            </div>
            <div className="flex">
              <input
                type="text"
                className="form-control p-2 border rounded-l"
                placeholder="Your Email"
              />
              <button className="btn btn-light p-2 border rounded-r">
                <i className="bi bi-envelope-at"></i>
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-700" />
        <h6>Co - Founder: Tình PT</h6>
      </div>
    </footer>
  );
};

export default Footer;
