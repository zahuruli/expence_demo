import mongoose from "mongoose";

//schema design:

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required & should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timeseries: true }
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
