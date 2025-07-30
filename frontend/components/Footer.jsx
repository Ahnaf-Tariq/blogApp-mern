import { assets } from "@/public/assests/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0 bg-black py-5">
      <Image src={assets.logo_light} alt="" width={120} />
      <p className="text-sm sm:text-base text-white">
        All right reserved. Copyright @blogger
      </p>
      <div className="flex gap-1 cursor-pointer">
        <Image src={assets.facebook_icon} alt="" width={40} />
        <Image src={assets.twitter_icon} alt="" width={40} />
        <Image src={assets.googleplus_icon} alt="" width={40} />
      </div>
    </div>
  );
};

export default Footer;
