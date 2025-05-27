import { Calendar2, Heart } from "iconsax-react";
import Image from "next/image";
import React from "react";

const DetailComponent = () => {
  return (
    <div className="flex justify-center">
      <div>
        {" "}
        <div className="w-[1531px] h-[1165px] p-10">
          <div className="flex flex-col md:flex-row  gap-20">
            <div className="w-full md:w-1/2 p-4">
              <div className="text-3xl font-medium gap-2 flex text-custom-green mb-7">
                <Heart size="32" color="#309898" variant="Bold" />
                Switzerland
              </div>
              <p className="text-[#183B4E] text-[16px] leading-[1.4] text-justify mb-4 h-[1034px] w-[678px]">
                Zermatt, Switzerland <br></br> Nestled at the foot of the iconic
                Matterhorn, Zermatt is a stunning mountain resort town <br />{" "}
                known for its world-class skiing, scenic hiking trails, and
                car-free charm. The town blends rustic Alpine architecture with
                luxurious chalets and hotels, offering breathtaking views
                year-round.<br></br>
                In winter, visitors flock to Zermatt for its vast ski terrain,
                including access to the Matterhorn Glacier Paradise, the highest
                cable car station in Europe. In summer, the area transforms into
                a paradise for hikers and climbers with routes like the Five
                Lakes Walk, showcasing crystal-clear alpine lakes and panoramic
                vistas. Zermatt is also a great destination for train lovers —
                the Gornergrat Railway offers an unforgettable journey to the
                Gornergrat summit, revealing a 360° view of 29 peaks over 4,000
                meters. <br /> Whether you're enjoying traditional Swiss fondue
                in a cozy mountain hut or exploring the glaciers, Zermatt
                delivers a perfect blend of adventure, tranquility, and natural
                beauty. Zermatt: The Alpine Jewel Beneath the Matterhorn Zermatt
                is one of Switzerland’s most enchanting destinations, nestled
                deep within the Valais canton in the south of the country, near
                the Italian border. What makes this town truly extraordinary is
                its backdrop: the Matterhorn, one of the most recognizable
                mountains in the world with its dramatic, pyramid-shaped peak
                soaring 4,478 meters (14,692 ft) into the sky. The mountain
                dominates the skyline and adds a magical quality to everything
                around it. <br />
                Car-Free, Carefree Charm Zermatt has a unique atmosphere thanks
                to its commitment to sustainability and preservation. The town
                center is completely car-free — only small electric taxis and
                horse-drawn carriages are allowed. This contributes to the
                town’s peaceful, clean-air environment and makes wandering its
                charming streets a delight. The cobbled lanes are lined with
                traditional wooden chalets, boutique shops, gourmet restaurants,
                and cozy cafés offering hot chocolate, raclette, and mulled wine
                in the winter. Outdoor Adventures All Year Round <br />. Winter
                in Zermatt is a haven for snow lovers. The ski area, known as
                Matterhorn Ski Paradise, is one of the highest and most
                extensive in Europe, with over 360 km of pistes and connections
                to the Italian resort of Cervinia. Snow is virtually guaranteed
                thanks to the nearby glacier. You can even ski here in the
                summer. <br />
                . Summer transforms the landscape into a lush green wonderland
                perfect for hiking, biking, and climbing. Over 400 km of marked
                trails snake through the mountains, forests, and meadows. The
                Five Lakes Walk is especially popular for its serene alpine
                lakes, some of which reflect the Matterhorn perfectly on a calm
                day. Iconic Experiences <br />. Gornergrat Railway: A highlight
                of any visit, this cogwheel train climbs up to 3,089 meters
                (10,135 ft) for panoramic views of the Matterhorn and more than
                20 surrounding glaciers and 29 peaks above 4,000 meters.
                <br></br>. Matterhorn Glacier Paradise: Ride Europe’s highest
                cable car to this awe-inspiring viewpoint. Inside, there's an
                ice palace carved into the glacier and sweeping vistas that, on
                a clear day, stretch across to France and Italy.<br></br>.
                Mountaineer’s Cemetery: A poignant and peaceful place honoring
                those who lost their lives attempting to climb the Matterhorn.
                It reflects the town’s deep connection to alpine exploration.
              </p>
            </div>
            <div className=" md:w-1/2 p-4 relative">
              <p className="text-right flex gap-1 text-[#309898] font-medium text-lg absolute p-2 px-5 rounded-[500px] mr-[35px] mt-9 shadow-5xl bg-[#FFFFFF] top-0 right-0 m-2">
                <Calendar2 size="26" color="#309898" />
                Jan 26, 2025
              </p>
              <Image
                width={736}
                height={1000}
                src="/images/Swiz.png"
                alt="Switzerland"
                className="w-[736px] mt-2 h-[1000px] rounded-lg shadow-md "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
