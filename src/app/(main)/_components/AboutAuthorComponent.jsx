import Image from "next/image";
import React from "react";

export default function AboutAuhorComponent({ author }) {
  return (
    <div
      className={`${
        author?.id === 1 || author?.id === 3 ? "bg-gray-100" : "bg-white"
      }  py-6`}
    >
      <div
        className={`${
          author?.id === 2 ? "flex flex-row-reverse" : "flex"
        } container mx-auto  justify-between  items-center gap-16`}
      >
        <Image
          width={699}
          height={400}
          className="object-cover rounded-lg "
          src={author?.image}
          alt=""
        />
        <div className="flex flex-col text-justify justify-between w-full leading-normal">
          <h5 className="mb-2 text-2xl text-[#309898] font-bold tracking-tight  dark:text-white">
            {author?.title}
          </h5>
          <p className="mb-3 font-normal     text-base text-[#183B4E] dark:text-gray-400">
            {author?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
