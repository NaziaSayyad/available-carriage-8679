import { ConnectionStates } from "mongoose";
import { Mongoconnect } from "../../../database/dbconnect";
import makeupModel from "../../../models/makeup.model";
// import makeupModel from "../../../models/makeup.model";

export default async function makeup_product(req, res) {
  await Mongoconnect();
  let { sort, order, min, max } = req.query;
  order = order === "asc" ? 1 : -1;
  console.log(min, max);

  if (sort && order) {
    let data = await makeupModel.find().sort({ price: order });
    res.send(data);
    return;
  }
  if (min && max) {
    min = +min;
    max = +max;
    const makeup = await makeupModel.aggregate([
      { $match: { price: { $gte: min } } },
      { $match: { price: { $lte: max } } },
    ]);
    return res.send(makeup);
  }
  let makeup = await makeupModel.find();
  res.status(201).send(makeup);
}
