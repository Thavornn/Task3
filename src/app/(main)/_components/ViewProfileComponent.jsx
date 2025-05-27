"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  LogoutCurve,
  Profile,
  ProfileCircle,
  Sms,
  TextBlock,
} from "iconsax-react";

const ViewProfileComponent = () => {
  const [isEditProfile, setIsEditProfile] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="flex w-[1409px] justify-between p-4 mt-10 bg-white rounded-t-3xl shadow-lg border border-gray-200">
          <div>
            {" "}
            <h2 className="text-2xl font-medium text-[#27445D]">
              Personal Information{" "}
            </h2>
          </div>
          <div className="flex gap-2 items-center">
            {" "}
            <LogoutCurve size="22" color="#94a3b8" />
            <Dialog>
              <DialogTrigger asChild>
                <a href="#" className="text-[#94A3B8] text-sm hover:underline">
                  Logout
                </a>
              </DialogTrigger>
              <DialogContent className="flex flex-col justify-center items-center p-6 rounded-lg">
                <DialogHeader>
                  <Image
                    width={190}
                    height={190}
                    src="/images/hack.png"
                    alt="Logout Illustration"
                    className="w-32 h-32 mb-4 ml-16"
                  />
                  <DialogTitle className="text-center text-lg font-medium text-gray-700">
                    Are you sure you want to logout?
                  </DialogTitle>
                </DialogHeader>
                <div className="flex gap-4 mt-6">
                  <button className="px-10 py-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200">
                    No
                  </button>
                  <button className="px-10 py-2 bg-[#183B4E] text-white rounded-lg hover:bg-[#0f4c75] transition duration-200">
                    Yes
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="h-[542px] w-[1409px]   border border-gray-200 bg-white">
          <div>
            {" "}
            <div className="w-[212px] m-10 h-[212px] flex-shrink-0">
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={212}
                height={300}
                className="rounded-full object-cover border border-gray-300"
              />
            </div>
            <div>
              {" "}
              <div className="grid grid-cols-2 gap-6 gap-y-10 ml-7 mt-10">
                <div>
                  <div className="flex gap-1">
                    <Profile size="22" color="#94a3b8" />

                    <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                      Full Name
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Black Monster"
                    className="w-[654.5px] p-2 bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <div className="flex gap-1">
                    <ProfileCircle size="22" color="#94a3b8" />
                    <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                      Gender{" "}
                    </label>
                  </div>
                  <input
                    type="email"
                    placeholder="Female"
                    className="w-[654.5px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <div className="flex gap-1">
                    <Sms size="22" color="#94a3b8" />
                    <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                      Email Address
                    </label>
                  </div>
                  <input
                    disabled={!isEditProfile}
                    type="email"
                    placeholder="monster@gmail.com"
                    className="w-[654.5px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <div className="flex gap-1">
                    <TextBlock size="22" color="#94a3b8" />
                    <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                      Bio (optional)
                    </label>
                  </div>
                  <input
                    type="email"
                    placeholder="Either being happy or sad you decide."
                    className="w-[654.5px] p-2  bg-[#F8FAFC] text-[#94A3B8] font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 w-[1409px] p-3 mb-16 bg-white rounded-b-3xl shadow-lg border border-gray-200">
          {isEditProfile ? (
            <>
              <button
                onClick={() => setIsEditProfile(!isEditProfile)}
                className="bg-[#183B4E] text-white px-6 py-2 rounded-xl hover:bg-[#0f4c75] transition duration-200"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditProfile(!isEditProfile)}
                className="bg-white text-[#183B4E] border-2 border-[#94A3B8] px-8 py-2 rounded-xl hover:bg-[#F8FAFC] transition duration-200"
              >
                Cancel
              </button>
              <button className="bg-[#183B4E] text-white px-6 py-2 rounded-xl hover:bg-[#0f4c75] transition duration-200">
                Save Changes
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProfileComponent;
<Dialog>
  <DialogTrigger>hsdffdk</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>;
