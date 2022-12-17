import { RequiredIndicator } from "@chakra-ui/react";
import { GrApple } from "react-icons/gr";
import { Mongoconnect } from "../../../database/dbconnect";
// import middleware from "../../../middleware/middleware";
import cartModel from "../../../models/cart.model";
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  const { method, body } = req;
  let deleteid = req.query.id;

  await Mongoconnect();
  const token = req.headers?.authorization?.split(" ")[1];

  let payload;
  let user;
  
  if (token) {
    const decoded = jwt.verify(token, "hush");
    if (decoded) {
      let userId = decoded.userID;
      user = userId;
      console.log(user);
      payload = { ...body, image: userId };
    }
  } else {
    res.send({ msg: "Please Login" });
  }

  switch (method) {
    case "GET": {
      try {
        console.log(user);
        let data = await cartModel.find({ image: user });
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
      let data = await cartModel.findByIdAndDelete(deleteid);
      res.send({ msg: "deleted" });
    }
    default: {
      res.send("error occured");
    }
  }
}
