import express from "express";
import {
  addTransectionController,
  getAllTransectionController,
} from "../controllers/transectionController.js";

//router object:
const router = express.Router();

//add transection:
router.post("/add-transection", addTransectionController);
//get transection:
router.get("/get-transection", getAllTransectionController);

export default router;
