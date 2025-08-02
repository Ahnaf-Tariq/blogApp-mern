"use client";
import { assets } from "@/public/assests/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [authorImage, setAuthorImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("Startup");
  const [author, setAuthor] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("author", author);

      image && formData.append("image", image);
      authorImage && formData.append("authorImage", authorImage);

      const response = await axios.post("http://localhost:4000/api/blog/add", formData);
      console.log(response.data)
      if (response.data.success) {
        toast.success(response.data.msg);
        setTitle("");
        setDescription("");
        setCategory("");
        setAuthor("");
        setImage(null);
        setAuthorImage(null);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error('Error in adding blog');
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
            <Image
              width={120}
              height={40}
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
            />
            <input
              onChange={(e: any) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>
        </div>
        <div>
          <p className="mb-3">Upload Author Image</p>
          <label htmlFor="authorImg">
            <Image
              width={90}
              height={30}
              src={
                !authorImage
                  ? assets.upload_area
                  : URL.createObjectURL(authorImage)
              }
              alt=""
            />
            <input
              onChange={(e: any) => setAuthorImage(e.target.files[0])}
              type="file"
              id="authorImg"
              hidden
              required
            />
          </label>
        </div>

        <div className="w-full">
          <p className="mb-2">Blog Title</p>
          <input
            className="w-full max-w-[500px] px-3 py-2 border border-gray-300 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <p className="mb-2">Author Name</p>
          <input
            className="w-full max-w-[500px] px-3 py-2 border border-gray-300 outline-none"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Type here"
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-2">Blog Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
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
