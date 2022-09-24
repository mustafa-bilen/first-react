import React from "react";

const Icons = ({ icon }) => {
  return (
    <div>
      <div className=" text-xl bg-black text-white p-2 rounded-full cursor-pointer">
        {icon}
      </div>
    </div>
  );
};

export default Icons;
