"use client";
import Footer from "@/components/Footer";
import { assets, blog_data } from "@/public/assests/assets";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = ({ params }: PageProps) => {
  const { id } = use(params);
  const [data, setData] = useState<any>(null);

  const fetchData = () => {
    const find = blog_data.find((item) => item.id === Number(id));
    setData(find);
    console.log(find);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 px-5 py-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center gap-2">
          <Link href={"/"}>
            <Image src={assets.logo} alt="" className="w-36 sm:w-44" />
          </Link>
          <button className="flex items-center gap-2 border border-black font-serif px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base shadow-[-7px_7px_0px_#000000] cursor-pointer">
            Get Started{" "}
            <Image
              src={assets.arrow}
              alt=""
              className="size-4 hidden sm:block"
            />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-4xl font-semibold max-w-[700px] mx-auto font-serif">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            alt=""
            className="size-20 mx-auto mt-8 border-2 border-white rounded-full"
          />
          <p className="font-semibold mt-1 pb-2 text-lg">{data.author}</p>
        </div>
      </div>
      <div className="max-w-[800px] md:mx-auto mx-5 mb-10 mt-[-80px]">
        <Image src={data.image} alt="" className="border-4 border-white" />
        <h1 className="font-semibold my-6 text-xl sm:text-2xl">
          Introduction:
        </h1>
        <p>{data.description}</p>
        <h3 className="font-semibold text-lg my-5">
          Step 1: Discover the Vibe
        </h3>
        <p className="my-3">
          Welcome to our space — a place where curiosity meets creativity. From
          bold ideas to casual reads, there's something here for every kind of
          explorer. Just scroll, click, and let your interest guide the way.
        </p>
        <h3 className="font-semibold text-lg my-5">
          Step 2: Interact Your Way
        </h3>
        <p className="my-3">
          This isn't a silent scroll. Hover over elements, tap on what catches
          your eye, and engage with what speaks to you. Leave a comment, react,
          or share your thoughts — this platform grows with your input.
        </p>
        <h3 className="font-semibold text-lg my-5">Step 3: Be Part of It</h3>
        <p className="my-3">
          You're not just a reader; you're part of the story. Join discussions,
          follow your favorite topics, and help shape what comes next. This is
          more than content — it's a community, and you're in it.
        </p>
        <h3 className="font-semibold text-lg my-5">
          Conclusion: Your Journey Starts Now
        </h3>
        <p className="my-3">
          Youve got the steps — now its your move. Whether you're here to
          explore, connect, or create, this space is ready for you. Dive in,
          stay curious, and dont be afraid to make it yours. Let's build
          something meaningful — together.
        </p>
        <div className="my-24">
          <p className="font-semibold">Share this article on social media.</p>
          <div className="flex gap-1 cursor-pointer">
            <Image src={assets.facebook_icon} alt="" width={40} />
            <Image src={assets.twitter_icon} alt="" width={40} />
            <Image src={assets.googleplus_icon} alt="" width={40} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
