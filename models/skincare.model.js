

import {Schema , model, models} from "mongoose";
const SkincareSchema = new Schema({
   image : String,
   small_img : String,
   look : String,
   title : String,
   name : String,
   rating : Number,
   price :Number
});

export default models.Skincaremodel || model("skincare", SkincareSchema);
