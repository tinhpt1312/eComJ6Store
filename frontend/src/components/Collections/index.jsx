import React from "react";

Collection.propTypes = {};

const callouts = [
  {
    name: "iPhone",
    description: "Explore the latest iPhone models",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844",
    imageAlt: "iPhone 15 Pro with triple-camera system and sleek design.",
    href: "#",
  },
  {
    name: "MacBook",
    description: "Powerful laptops with M2 chip",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-bts-offer-featured-202406_GEO_VN?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1719381084982",
    imageAlt:
      "MacBook Air with sleek design, M2 chip, and Retina display on a wooden desk.",
    href: "#",
  },
  {
    name: "iPad",
    description: "Versatile tablets for all your needs",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816",
    imageAlt: "iPad Pro with Apple Pencil and Magic Keyboard.",
    href: "#",
  },
  {
    name: "Apple Watch",
    description: "Health and fitness on your wrist",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1707259289595",
    imageAlt: "Apple Watch Ultra with rugged design and new health features.",
    href: "#",
  },
  {
    name: "AirPods",
    description: "Wireless earbuds with immersive sound",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=png-alpha&.v=1713308272877",
    imageAlt: "AirPods Pro with noise cancellation and transparency mode.",
    href: "#",
  },
  {
    name: "Apple TV",
    description: "Your favorite shows and movies in 4K HDR",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-pro-202310?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1696964122967",
    imageAlt: "Apple TV 4K with Siri Remote.",
    href: "#",
  },
  {
    name: "HomePod",
    description: "High-fidelity sound for your home",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_VN?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1693501347518",
    imageAlt: "HomePod mini in space gray with touch controls.",
    href: "#",
  },
  {
    name: "MagSafe Accessories",
    description: "Snap-on, wireless charging accessories",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220",
    imageAlt: "MagSafe chargers and cases for iPhone.",
    href: "#",
  },
  {
    name: "Apple Pencil",
    description: "Precision tool for creatives and professionals",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-apple-pencil-202405?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1716327768944",
    imageAlt: "Apple Pencil drawing on an iPad Pro.",
    href: "#",
  },
  {
    name: "AppleCare",
    description: "Extended warranty and support for your devices",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-ultra-202309_GEO_VN?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1694103727336",
    imageAlt: "AppleCare coverage for Apple devices.",
    href: "#",
  },
];

function Collection() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 mb-3">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
