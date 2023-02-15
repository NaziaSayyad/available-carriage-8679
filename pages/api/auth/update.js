import { Mongoconnect } from "../../../database/dbconnect";
import userModel from "../../../models/user.model";
export default async function handler(req, res) {
  try {
    await Mongoconnect();
    let data = await userModel.findByIdAndUpdate(
      "63987f8921755c38af9c988f",
      req.body,
      {
        new: true,
      }
    );
    return res.send("updated");
  } catch (e) {
    res.send(e.message);
  }
}
