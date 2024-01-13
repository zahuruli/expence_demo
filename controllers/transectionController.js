import transectionModel from "../models/transectionModel.js";

//getAllTransectionController
export const getAllTransectionController = async (req, res) => {
  try {
    const allTransections = await transectionModel.find({});
    res.status(200).json({
      success: true,
      message: "Getting all transection successfully",
      total: allTransections.length,
      allTransections,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Getting all transection failed",
    });
  }
};

//addTransectionController:
export const addTransectionController = async (req, res) => {
  try {
    const newTransection = await new transectionModel(req.body).save();
    res.status(200).json({
      success: true,
      message: "Transection created successfully",
      newTransection,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Add transection failed",
    });
  }
};
