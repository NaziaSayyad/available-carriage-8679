

import {Schema , model, models} from "mongoose";
const makeupschema = new Schema({
   image : String,
   small_img : String,
   look : String,
   title : String,
   name : String,
   rating : Number,
   price :Number
});

export default models.Makeupmodel || model("makeup", makeupschema);
