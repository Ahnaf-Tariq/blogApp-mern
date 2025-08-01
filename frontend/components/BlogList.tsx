"use client";
import { assets, blog_data } from "@/public/assests/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BlogData {
  _id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  authorImage: string;
  image: string;
  date: string;
}

const BlogList = () => {
  const [category, setCategory] = useState("All");
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/blog/list");
      console.log(response.data);
      setBlogs(response.data.getAllBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <div className="flex justify-center gap-4 mx-2">
        <button
          onClick={() => setCategory("All")}
          className={`${
            category === "All" && "bg-black text-white px-3 py-1 "
          } cursor-pointer`}
        >
          All
        </button>
        <button
          onClick={() => setCategory("Technology")}
          className={`${
            category === "Technology" && "bg-black text-white px-3 py-1 "
          } cursor-pointer`}
        >
          Technology
        </button>
        <button
          onClick={() => setCategory("Startup")}
          className={`${
            category === "Startup" && "bg-black text-white px-3 py-1 "
          } cursor-pointer`}
        >
          Startup
        </button>
        <button
          onClick={() => setCategory("Lifestyle")}
          className={`${
            category === "Lifestyle" && "bg-black text-white px-3 py-1 "
          } cursor-pointer`}
        >
          Lifestyle
        </button>
      </div>
      <div className="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-2 gap-y-8 m-10">
        {blogs
          .filter((item) => category === "All" || item.category === category)
          .map((item, index) => (
            <Link
              href={`/blogs/${item._id}`}
              key={index}
              className="w-full sm:max-w-[350px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000] cursor-pointer"
            >
              <Image
                src={item.image}
                alt=""
                width={400} // Set according to your layout
                height={250}
                className="border-b border-black"
              />
              <p className="bg-black text-white text-sm ml-3 mt-4 px-2 inline-block">
                {item.category}
              </p>
              <div className="p-4">
                <p className="mb-2 text-base font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="mb-3 text-sm text-gray-700">{item.description}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  Read More{" "}
                  <Image src={assets.arrow} className="size-3" alt="" />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
