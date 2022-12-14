import { Mongoconnect } from "../../../database/dbconnect";
import userModel from "../../../models/user.model";
export default async function handler(req, res) {
  try {
    await Mongoconnect();
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        return res.status(200).send({ msg: "success", name: user.name });
      } else {
        return res.status(401).send({ msg: "password Incorrect" });
      }
    } else {
      return res.send({ msg: "Email not registred" });
    }
  } catch (e) {
    res.send(e.message);
  }
}
