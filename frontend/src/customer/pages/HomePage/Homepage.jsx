import React from "react";
import Maincarosel from "../../components/HomeCarosel/Maincarosel";
import Homesectioncarosel from "../../components/HomeSectionCarosel/Homesectioncarosel";

const Homepage = () => {
  return (
    <div>
      <Maincarosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <Homesectioncarosel sectionName={"Bán chạy"} />
        <Homesectioncarosel sectionName={"Quần dài"} />
        <Homesectioncarosel sectionName={"Áo thun"} />
        <Homesectioncarosel sectionName={"Quần lót"} />
        <Homesectioncarosel sectionName={"Nước hoa"} />
      </div>
    </div>
  );
};

export default Homepage;
