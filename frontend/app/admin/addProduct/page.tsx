"use client";
import { assets } from "@/public/assests/assets";
import Image from "next/image";
import React from "react";

const page = () => {
  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-3 w-full mx-12 my-8"
      >
        <div>
          <p className="mb-3">Upload Image</p>
          <label htmlFor="image">
            <Image className="w-32" src={assets.upload_area} alt="" />
            <input type="file" id="image" hidden />
          </label>
        </div>

        <div className="w-full">
          <p className="mb-2">Blog Title</p>
          <input
            className="w-full max-w-[500px] px-3 py-2 border border-gray-300 outline-none"
            type="text"
            placeholder="Type here"
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-2">Blog Description</p>
          <textarea
            className="w-full max-w-[500px] px-3 py-2 border border-gray-300 outline-none"
            placeholder="Write Content here"
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-2">Blog Category</p>
          <select
            className="w-full max-w-[170px] px-3 py-2 border border-gray-300 outline-none"
          >
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-28 py-3 mt-4 bg-black text-white cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default page;
