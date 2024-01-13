import userModel from "../models/userModel.js";

//==========loginController====================
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found !",
      });
    }
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//==========registerController====================
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new userModel({ name, email, password });
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Register Successful",
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
