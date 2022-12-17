import { GrApple } from "react-icons/gr";
import { Mongoconnect } from "../../../database/dbconnect";
// import middleware from "../../../middleware/middleware";
import cartModel from "../../../models/cart.model";

export default async function handler(req, res) {
  const { method, body } = req;

  await Mongoconnect();
  const token = req.headers?.authorization?.split(" ")[1];

  let payload;

  if (token) {
    const decoded = jwt.verify(token, "hush");
    if (decoded) {
      let userId = decoded.userID;
      payload = { ...body, image: userId };
    }
  } else {
    return res.send({ msg: "Please Login" });
  }

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
        const data = new cartModel(payload);
        await data.save();
        console.log(data);

        return res.send({ msg: "successfully added" });
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
