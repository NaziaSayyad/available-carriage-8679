import { Mongoconnect } from "../../../database/dbconnect";
import UserSchema from "../../../models/user.model";
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

export default async function handler(req, res) {
  try {
    await Mongoconnect();
    const { email, password } = req.body;
    let user = await UserSchema.findOne({ email });
    if (user) {
      let hashed_password = user.password;
      bycrypt.compare(password, hashed_password, function (err, result) {
        if (result) {
          const token = jwt.sign({ userID: user._id }, "hush");
          res.send({ msg: "success", token: token });
        } else {
          res.send({ msg: "incorrect password" });
        }
      });
    } else {
      res.send({ msg: "email not resgisterd" });
    }
  } catch (e) {
    res.send(e.message);
  }
}
