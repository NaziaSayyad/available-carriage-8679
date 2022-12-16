import { Mongoconnect } from "../../../database/dbconnect";
import UserSchema from "../../../models/user.model";
const bycrypt = require("bcrypt");
export default async function handler(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    let oldUser = await UserSchema.findOne({ email });
    if (oldUser) {
      return res.send({ msg: "already" });
    }
    bycrypt.hash(password, 4, async function (err, hash) {
      const user = new UserSchema({
        name: firstname + lastname,
        email,
        password: hash,
      });
      await user.save();
      res.send({ msg: "success" });
    });
  } catch (e) {
    res.send(e.message);
  }
}
