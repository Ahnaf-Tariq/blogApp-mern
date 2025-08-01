import cloudinary from "../middleware/cloudinary.js";
import blogModel from "../models/BlogModel.js";
// import { v2 as cloudinary } from "cloudinary";

const addBlog = async (req, res) => {
  try {
    const { title, description, category, author } = req.body;
    const files = req.files;

    if (!files || !files.image || !files.authorImage) {
      return res.send({ success: false, msg: "Both images are required" });
    }

    const blogImagePath = files.image[0].path;
    const authorImagePath = files.authorImage[0].path;

    const blogImageResult = await cloudinary.uploader.upload(blogImagePath, {
      resource_type: "image",
    });

    const authorImageResult = await cloudinary.uploader.upload(authorImagePath, {
      resource_type: "image",
    });

    const blog = await blogModel.create({
      title,
      description,
      category,
      author,
      image: blogImageResult.secure_url,      
      authorImage: authorImageResult.secure_url,
    });

    res.json({ success: true, blog });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error });
  }
};

export { addBlog };
