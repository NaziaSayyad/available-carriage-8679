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
          const token = jwt.sign(
            { userID: user._id, role:user.role, name:user.name }, "hush");

          res.send({ msg: "success", token: token, name: user.name , role:user.role});
        } else {
          res.send({ msg: "incorrect password" });
        }
      });
    }
     else {
      res.send({ msg: "error" });
    }
  } catch (e) {
    res.send(e.message);
  }
}
