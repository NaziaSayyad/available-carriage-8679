

import {Schema , model, models} from "mongoose";
const productschema = new Schema({
    name :String,
    price : Number,
    qty : Number,
    img : String,
});

export default models.Productmodel || model("product", productschema);
