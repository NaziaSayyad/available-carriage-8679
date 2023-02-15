
import { Mongoconnect } from "../../../database/dbconnect";
import makeupModel from "../../../models/makeup.model";
// import makeupModel from "../../models/makeup.model";
const jwt = require("jsonwebtoken");

const Makeup = async (req, res) =>{
    const {method, body} = req; 
    let deletedid = req.query.id;
    let updatedid = req.query.id;

    await Mongoconnect()
    const token = req.headers?.authorization?.split(" ")[1];

    let payload;
    let user;

    if(token){
        const decoded = jwt.verify(token , "hush");
        if(decoded.role === "admin"){
            switch(method){
                case "POST" : {
                    try{
                        const {image,small_img,look,title,name,rating,price} = req.body;
                        const prdct =  new makeupModel({image,small_img,look,title,name,rating,price});
                        await prdct.save();
                        // console.log("Product");
                        return res.status(201).send("Product Created Sucessfully");
                    
                    }catch{
                        return res.send("error occured");
                    }
                }
                case "DELETE" :{
                    let data = await makeupModel.findByIdAndDelete(deletedid);
                    res.status(200).send({msg : "deleted", data});
                }
                case "PATCH" : {
                    let data = await makeupModel.findByIdAndUpdate(updatedid);
                    res.status(200).send({msg : "updated Price" , data});

                }
                default :{
                    res.send("Error Occured");
                }
                
             }
        
        }
        else{
           res.status(401).send({msg : "You don't have access "})
        }
    }
    else{
        res.send("Please Login ")
    }
    // lets create products 
    
}
export default Makeup;