import { GrApple } from "react-icons/gr";
import { Mongoconnect } from "../../../database/dbconnect";
// import middleware from "../../../middleware/middleware";
import cartModel from "../../../models/cart.model";

export default async function handler(req, res) {
  const { method, body } = req;

  await Mongoconnect();

  switch (method) {
    case "GET": {
      try {
        let data = await cartModel.find();
        return res.send(data);
      } catch {
        return res.send("error occured");
      }
    }
    case "POST": {
      try {
        console.log(body);
        const data = new cartModel(body);
        await data.save();

        return res.send("successfully added");
      } catch (e) {
        return res.send(e.message);
      }
    }

    case "DELETE": {
    }
    default: {
      res.send("error occured");
    }
  }
}
