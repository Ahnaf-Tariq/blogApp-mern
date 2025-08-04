"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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

const page = () => {
  const [blogsData, setBlogsData] = useState<BlogData[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/blog/list");
      console.log(response.data);
      if (response.data.success) {
        setBlogsData(response.data.getAllBlogs);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in getting all blogs");
    }
  };

  const removeBlog = async (id: string) => {
    try {
      const response = await axios.post("http://localhost:4000/api/blog/delete",{id});
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.msg);
        await fetchData();
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting blog");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="my-8 mx-12">
      <p className="py-2 text-lg font-semibold">All Blogs List</p>
      <div className="flex flex-col gap-2 border border-black">
        <div className="hidden md:grid grid-cols-[2fr_3fr_1fr_1fr_1fr] p-2 bg-gray-100 text-sm">
          <b>Author Name</b>
          <b>Blog Title</b>
          <b>Category</b>
          <b>Date</b>
          <b className="text-center">Action</b>
        </div>
        {blogsData.map((blog, index) => (
          <div
            className="grid grid-cols-[2fr_3fr_1fr_1fr_1fr] items-center border-b-2 gap-2 p-2 text-sm"
            key={index}
          >
            <p className="flex items-center gap-2">
              <img
                className="size-8 rounded-full"
                src={blog.authorImage}
                alt=""
              />
              {blog.author}
            </p>
            <p>{blog.title}</p>
            <p>{blog.category}</p>
            <p>{new Date(blog.date).toDateString()}</p>
            <p
              onClick={() => removeBlog(blog._id)}
              className="text-right md:text-center cursor-pointer text-lg"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
