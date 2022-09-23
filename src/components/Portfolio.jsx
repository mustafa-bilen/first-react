import React from "react";
import PortfolioCart from "./PortfolioCart";
import {
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
} from "../assets/index";

const Portfolio = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="text-center my-10">
        <p className="text-6xl font-thin">Portfolio</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel
          minima veniam. Itaque quam veniam, aspernatur sed cupiditate, vitae
          est sint nesciunt unde minima facere ad voluptatem. Sunt, nesciunt
          dolores.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[80rem] grid sm:grid-cols-2 md:grid-cols-3 mt-4 mx-5 gap-5">
          {/*  */}
          <PortfolioCart photo={Photo1} />
          <PortfolioCart photo={Photo2} />
          <PortfolioCart photo={Photo3} />
          <PortfolioCart photo={Photo4} />
          <PortfolioCart photo={Photo5} />
          <PortfolioCart photo={Photo6} />
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
