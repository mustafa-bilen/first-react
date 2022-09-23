import React from "react";
import { Photo1, Photo2 } from "../assets/index";

const Portfolio = () => {
  return (
    <div>
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
        <div className="düzenlencek">
          {/*  */}
          <div className="w-auto rounded-lg overflow-hidden">
            <div>
              <img
                src={Photo1}
                alt="asdpgpasd"
                className="w-full object-cover"
              />
            </div>

            <div className="text-center bg-white p-5">
              <p className="text-2xl">lorem, ipsum</p>
              <p className="text-sm mt-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                ex!
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
