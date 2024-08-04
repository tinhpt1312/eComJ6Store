import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Homesectioncard from "../HomeSectionCard/Homesectioncard";
import { Button } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Homesectioncarosel = ({ sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = [1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
    <Homesectioncard product={item} />
  ));

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ArrowCircleLeftIcon
              sx={{
                transform: "rotate(90deg)",
                color: "black",
              }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ArrowCircleLeftIcon
              sx={{
                transform: "rotate(90deg)",
                color: "black",
              }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Homesectioncarosel;
