import React from "react";
import Icons from "../components/Icons";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
const OurTeamCart = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://ca.slack-edge.com/T03LBL87DA8-U03MW5VGEMS-e7da38ceffb6-512"
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
    </div>
  );
};

export default OurTeamCart;
