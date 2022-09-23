import React from "react";
import { BiCode } from "react-icons/bi";
import { MdDesignServices, MdOutlineNetworkWifi } from "react-icons/md";
import ServicesCart from "./ServicesCart";

const Services = () => {
  return (
    <div className="my-10 h-auto">
      <div className="text-center">
        <p className="text-6xl font-thin">Services</p>
        <p className="mt-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          corporis?
        </p>
      </div>
      <div className="flex flex-col sm:flex-row mt-[3rem] justify-evenly gap-3 sm:mx-[1.6rem]">
        {/* comment*/}
        <ServicesCart title="Programming" icons={<BiCode />} />
        <ServicesCart title="Design" icons={<MdDesignServices />} />
        <ServicesCart title="Networking" icons={<MdOutlineNetworkWifi />} />
        {/* comment*/}
      </div>
    </div>
  );
};

export default Services;
