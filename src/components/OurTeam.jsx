import React from "react";
import Icons from "../components/Icons";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

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
      <div className="düzenlencek">
        {/*  */}
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://ca.slack-edge.com/T03LBL87DA8-U03MW5VGEMS-e7da38ceffb6-512"
            my
            neck
            hurts
            so
            much
            alt="profil"
            className="w-[15rem] rounded-full border-[8px] border-gray-400"
          />
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Frank - Mentor</p>
            <p className="hover:underline">Back-end Developer</p>
            <div className="mt-2 flex gap-3">
              <Icons icon={<FiTwitter />} />
              <Icons icon={<FiFacebook />} />
              <Icons icon={<FiLinkedin />} />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default OurTeam;
