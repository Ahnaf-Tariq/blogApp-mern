const addEmail = async (req, res) => {
  try {
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
