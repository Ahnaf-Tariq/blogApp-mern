import Image from "next/image";
import React from "react";
import { assets } from "@/public/assests/assets";

const Header = () => {
  
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center gap-2">
        <Image src={assets.logo} alt="logo" />
        <button className="flex items-center gap-2 border border-black font-serif px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base shadow-[-7px_7px_0px_#000000] cursor-pointer">
          Start here{" "}
          <Image src={assets.arrow} alt="" className="size-4 hidden sm:block" />
        </button>
      </div>
      <div className="text-center my-10">
        <h1 className="text-3xl sm:text-5xl font-medium font-serif">
          Latest Blogs
        </h1>
        <p className="mt-10 max-w-4xl m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          laudantium non eveniet quasi rerum hic dolorum deleniti ratione ullam
          numquam. Necessitatibus harum esse explicabo totam exercitationem
          atque consectetur ad dolor.
        </p>
        <form className="flex justify-between max-w-md mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]">
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-2 outline-none"
          />
          <button
            type="submit"
            className="py-2 px-4 active:bg-gray-600 active:text-white font-serif cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
