import React from "react";
import { AboutUs } from "../assets";

const About = () => {
  return (
    <div>
      <div className="text-center my-10">
        <p className="text-6xl font-thin">About</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel
          minima veniam. Itaque quam veniam, aspernatur sed cupiditate, vitae
          est sint nesciunt unde minima facere ad voluptatem. Sunt, nesciunt
          dolores.
        </p>
      </div>
      {/* sasa*/}
      <div className="flex flex-col-reverse">
        <div className="yazılar-div">
          {[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel",
          ].map((item, idx) => (
            <p key={idx} className="p-2">
              {item}
            </p>
          ))}
        </div>
        <div>
          <img src={AboutUs} alt="asdglasd" />
        </div>
      </div>
    </div>
  );
};

export default About;
