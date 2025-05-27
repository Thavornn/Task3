import LogoComponent from "@/components/LogoComponent";
import { Key, Sms } from "iconsax-react";
import Link from "next/link";
import React from "react";
const LoginComponent = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-3xl font-semibold mb-10 pt-[25px]  flex justify-center gap-1">
          Welcome to <LogoComponent />
        </h2>
      </div>{" "}
      <form className="space-y-12">
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
            className="w-full pl-5 py-2  bg-[#F8FAFC] text-[#94A3B880] rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
        <hr className="my-12 ml-3 text-[#94A3B8]/20  mb-12" />
        <button
          type="submit"
          className="w-full ml-2 bg-[#009990] text-white p-2 rounded-lg hover:bg-teal-600 transition"
        >
          Login
        </button>
      </form>
      <p className="text-end text-[#183B4E] font-normal mt-4">
        Haven’t had an account yet?{" "}
        <Link
          href="/register"
          className="text-custom-green font-medium hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginComponent;
