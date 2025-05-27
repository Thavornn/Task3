import { ArrowRight, Calendar2, Heart } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardComponent = ({ isLoggedIn }) => {
  return (
    <div className="w-[80%] md:p-10 md:w-[50%] lg:w-[30%] lg:p-0 2xl:w-[23%] 2xl:p-0">
      <div className="relative">
        {isLoggedIn && (
          <div className="absolute top-3 right-3 flex gap-2 z-10">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100"></button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100"></button>
          </div>
        )}
        <div className="rounded-4xl">
          <Image
            className="object-cover w-full h-[263px] rounded-[30px]"
            src="/images/city.png"
            alt=""
            width={500}
            height={300}
          />

          <div>
            <div className="flex justify-between mt-5">
              <div className="text-xl font-medium flex text-custom-green">
                Switzerland
              </div>
              <div className="text-custom-green flex gap-1 text-xs">
                <div className="mt-1">
                  <Calendar2 size="22" color="#309898" className="" />
                </div>
                <div className="mt-2 font-normal text-xs">Jan 26, 2025</div>
              </div>
            </div>
            <p className="mt-5">
              This picture was taken in Europe. I went there last month with my
              special person. It was such a romantic date.
            </p>
            <p>
              <Link
                href="/view-detail/id"
                className="text-custom-dark-red flex gap-x-2 justify-end mt-5"
              >
                Read more <ArrowRight size="22" color="#f47373" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
