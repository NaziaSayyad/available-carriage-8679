// import Productmodel from "../../models/products.model";

import skincareModel from "../../../models/skincare.model";
import { Mongoconnect } from "../../database/dbconnect";


const Skincare = async (req, res) =>{
    await Mongoconnect();
    // lets create products
    const {image,small_img,look,title,name,rating,price} = req.body;
    const prdct =  new skincareModel({image,small_img,look,title,name,rating,price});
    await prdct.save();
    // console.log("Product");
    return res.status(201).send("Product Created Sucessfully");

}
export default Skincare;