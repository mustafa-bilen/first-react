import React from "react";
import OurTeamCart from "./OurTeamCart";
const OurTeam = () => {
  return (
    <div className="py-10 bg-gray-200">
      <div className="text-center my-10">
        <p className="text-6xl font-thin">Our Team</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. minima
          veniam. Itaque quam veniam, aspernatur sed cupiditate, vitae est sint
          nesciunt unde minima facere ad voluptatem. Sunt, nesciunt dolores.
        </p>
      </div>
      {/* sa */}
      <div className="flex flex-col sm:flex-row max-w-[50rem] sm:max-w-[55rem] md:max-w-[60rem] mx-auto justify-between items-center gap-[3rem]">
        {/*  */}
        <OurTeamCart
          name="Frank-Mentor"
          talent="Back-end Developer"
          image="https://ca.slack-edge.com/T03LBL87DA8-U03MW5VGEMS-e7da38ceffb6-512"
        />
        <OurTeamCart
          name="Mustafa Bilen"
          image="https://ca.slack-edge.com/T03LBL87DA8-U03SCRR0XKJ-afef675115ce-512"
        />
        <OurTeamCart
          name="Harvey Watson"
          talent="Mobile Developer"
          image="https://ca.slack-edge.com/T03LBL87DA8-U03KULWRB9D-5b17324fe99c-512"
        />
        {/*  */}
      </div>
    </div>
  );
};

export default OurTeam;
