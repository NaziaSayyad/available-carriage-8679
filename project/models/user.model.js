import { Schema, model, models } from "mongoose";
const userschema = new Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default models.user || model("user", userschema);


