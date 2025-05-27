import Image from "next/image";
import React from "react";

const ProfileComponent = () => {
  const newLocal = "/images/profile.png";
  return (
    <div className="ml-[260px]">
      <div className="flex flex-col sm:flex-row items-center gap-2  sm:gap-4 bg-[#F6F6F6] p-2 sm:p-3 rounded-lg">
        <Image
          width={50}
          height={50}
          className="rounded-full w-10 md:w-12 2xl:w-14"
          src={newLocal}
          alt=""
        />
        <div className="flex flex-col">
          <h6 className="text-custom-green text-sm md:text-base font-medium">
            Monster
          </h6>
          <p className="text-blue-custom text-xs md:text-sm">
            Either being happy or sad you decide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
