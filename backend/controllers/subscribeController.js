import subscribeModel from "../models/subscribeModel.js";

const addEmail = async (req, res) => {
  try {
    const { email } = req.body;

    await subscribeModel.create({ email });

    res.json({success:true,msg: 'Email subscribed'})
  } catch (error) {
    console.log(error);
    res.json({ success: true, msg: error.message });
  }
};

const listEmail = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: true, msg: error.message });
  }
};

const removeEmail = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.json({ success: true, msg: error.message });
  }
};

export { addEmail, listEmail, removeEmail };
