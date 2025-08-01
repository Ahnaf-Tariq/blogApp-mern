import cloudinary from "../middleware/cloudinary.js";
import blogModel from "../models/BlogModel.js";
// import { v2 as cloudinary } from "cloudinary";

const addBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const image = req.file;

    if (!image) return res.status(400).json({ msg: "No image provided" });

    const result = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const blog = await blogModel.create({
      title,
      description,
      category,
      image: result.secure_url
    });

    res.json({ success: true, blog });

  } catch (error) {
    console.log(error);
    res.json({success:false, error})
  }
};

export { addBlog };
