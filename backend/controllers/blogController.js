import cloudinary from "../middleware/cloudinary.js";
import blogModel from "../models/BlogModel.js";

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

    const authorImageResult = await cloudinary.uploader.upload(
      authorImagePath,
      {
        resource_type: "image",
      }
    );

    await blogModel.create({
      title,
      description,
      category,
      author,
      image: blogImageResult.secure_url,
      authorImage: authorImageResult.secure_url,
    });

    res.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const getBlog = async (req, res) => {
  try {
    const getAllBlogs = await blogModel.find({});

    res.json({ success: true, getAllBlogs });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const singleBlog = await blogModel.findById(req.params.id);

    if (!singleBlog) {
      return res.json({ success: false, msg: "Blog not found!" });
    }

    res.json({ success: true, singleBlog });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

const deleteSingle = async (req, res) => {
  try {
    const { id } = req.body;
    await blogModel.findByIdAndDelete(id);

    res.json({ success: true, msg: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export { addBlog, getBlog, getSingleBlog, deleteSingle };
