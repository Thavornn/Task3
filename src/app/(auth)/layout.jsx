import Image from "next/image";

export default function MainLayout({ children }) {
  return (
    <div className="text-custom-blue  flex justify-center rounded-2xl items-center h-screen  w-full">
      <div className=" flex w-4/6 h-5/6 justify-between rounded-4xl shadow-[0_4px_16px_rgba(0,0,0,0.06),_0_-1px_16px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className=" p-10 w-1/2  flex flex-col justify-center bg-white">
          {children}
        </div>
        <div className=" w-1/2 m-9">
          <Image
            width={499}
            height={619}
            className="w-full h-full rounded-3xl object-cover"
            src="/images/registerpic.png"
            alt="Registration background"
          />
        </div>
      </div>
    </div>
  );
}
