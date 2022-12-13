// import Productmodel from "../../models/products.model";

import { Mongoconnect } from "../../database/dbconnect";
import productModel from "../../models/product.model";

const Products = async (req, res) =>{
    await Mongoconnect();
    // lets create products
    const {name,price,qty,img} = req.body;
    const prdct =  new productModel({name,price,qty,img});
    await prdct.save();
    // console.log("Product");
    return res.status(201).send("Product Created Sucessfully");

}
export default Products;