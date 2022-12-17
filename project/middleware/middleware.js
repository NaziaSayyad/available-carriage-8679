// const jwt = require("jsonwebtoken");
// export default async function handler(req, res) {
//   const token = req.headers?.authorization?.split(" ")[1];
//   if (token) {
//     const decoded = jwt.verify(token, "hush");
//     if (decoded) {
//       const userID = decoded.userID;
//       req.body.usid = userID;
//       next();
//     } else {
//       res.send({ msg: "please login" });
//     }
//   } else {
//     res.send({ msg: "please login" });
//   }
// }
import { NextResponse } from "next/server";
export default function middleware(req, res) {
  console.log("checking");
  NextResponse();
}
