import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true },
  dob: { type: Date },
  state: { type: String },
  gender: { type: String },
  location: { type: String },
  pimage: { type: String, require: true },
  rdoc: { type: String, require: true },
});

// define model
const UserProfileModel = mongoose.model("userprofile", userSchema)

export default UserProfileModel;
