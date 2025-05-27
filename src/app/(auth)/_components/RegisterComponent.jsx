import LogoComponent from "@/components/LogoComponent";
import { Key, Profile, Sms } from "iconsax-react";
import Link from "next/link";
import React from "react";

const RegisterComponent = () => {
  return (
    <div>
      {" "}
      <div className="">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold mb-10 flex gap-1">
            Sign Up to <LogoComponent />
          </h2>
        </div>
        <form className="space-y-12">
          <div>
            <div className="flex gap-1">
              <Profile size="24" color="#94a3b8" />

              <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                Full Name
              </label>
            </div>
            <input
              type="text"
              placeholder="Please type your username"
              className="w-full pl-5 py-2  bg-[#F8FAFC] text-[#94A3B880] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <div className="flex gap-1">
              <Sms size="22" color="#94a3b8" />

              <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                Email
              </label>
            </div>
            <input
              type="email"
              placeholder="Please type your email"
              className="w-full pl-5 py-2   bg-[#F8FAFC] text-[#94A3B880] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <div className="flex gap-1">
              <Key size="22" color="#94a3b8" />

              <label className="block text-[#94A3B8] font-normal text-lg mb-2">
                Password
              </label>
            </div>
            <input
              type="password"
              placeholder="Please type your password"
              className="w-full pl-5 py-2  bg-[#F8FAFC] text-[#94A3B880] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <hr className="my-10 text-[#94A3B8]/20  mb-12" />
          <button
            type="submit"
            className="w-full bg-[#009990] text-white p-2 rounded-lg hover:bg-teal-600 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-end mt-4 gap-2">
          <p className="  text-[#183B4E] font-normal">
            Already have an account?
          </p>
          <Link
            href="/login"
            className="text-custom-green font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
