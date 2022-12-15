
import { Mongoconnect } from "../../../database/dbconnect";
import makeupModel from "../../../models/makeup.model";
// import makeupModel from "../../models/makeup.model";

const Makeup = async (req, res) =>{
    
    await Mongoconnect()
    // lets create products 
    const {image,small_img,look,title,name,rating,price} = req.body;
    const prdct =  new makeupModel({image,small_img,look,title,name,rating,price});
    await prdct.save();
    // console.log("Product");
    return res.status(201).send("Product Created Sucessfully");

}
export default Makeup;