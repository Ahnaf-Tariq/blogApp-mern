import { assets } from "@/public/assests/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 border-r-2 border-black">
      <div className="px-2 sm:pl-12 py-3 border-b-2 border-black">
        <Image src={assets.logo} alt="" />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] py-12 relative">
        <div className="w-[50%] sm:w-[80%] absolute right-0 flex flex-col gap-5">
          <Link
            href={"/admin/addProduct"}
            className="flex items-center gap-2 border-2 border-black px-2 py-1 shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.add_icon} alt="" /> <span className="hidden sm:block">Add Blog</span>
          </Link>
          <Link
            href={"/admin/blogList"}
            className="flex items-center gap-2 border-2 border-black px-2 py-1 shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.blog_icon} alt="" /> <span className="hidden sm:block">Blog Lists</span>
          </Link>
          <Link
            href={"/admin/subscriptions"}
            className="flex items-center gap-2 border-2 border-black px-2 py-1 shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.email_icon} alt="" /> <span className="hidden sm:block">Subscriptions</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
