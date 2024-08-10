import React from "react";
import Carousel from "../../components/Carousel";
import Collection from "../../components/Collections";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <Carousel />
      <Collection />
    </div>
  );
}

export default HomePage;
