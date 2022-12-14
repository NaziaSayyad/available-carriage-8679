import { Mongoconnect } from "../../../database/dbconnect";
import userModel from "../../../models/user.model";
export default async function handler(req, res) {
  try {
    await Mongoconnect();
    const { name, email, password } = req.body;
    let oldUser = await userModel.findOne({ email });
    if (oldUser) {
      return res.send({ msg: "alraedy" });
    }
    const user = new userModel({ name, email, password });
    await user.save();
    res.status(200).send({ msg: "success" });
  } catch (e) {
    res.send(e.message);
  }
}
