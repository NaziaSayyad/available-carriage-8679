import { Mongoconnect } from "../../../database/dbconnect";
import makeupModel from "../../../models/makeup.model";
// import makeupModel from "../../../models/makeup.model";

export default async function makeup_product(req, res) {
  await Mongoconnect();
  let { sort, order } = req.query;
  order = order === "asc" ? 1 : -1;

  if (sort && order) {
    let data = await makeupModel.find().sort({ price: 1 });
    res.send(data);
    return;
  }
  const makeup = await makeupModel.find();
  res.status(201).send(makeup);
}
