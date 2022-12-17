import { Schema, model, models } from "mongoose";
const CartSchema = new Schema({
  image: String,
  small_img: String,
  look: String,
  title: String,
  name: String,
  rating: Number,
  price: Number,
  user: String,
});

export default models.cart || model("cart", CartSchema);
// line no batao
