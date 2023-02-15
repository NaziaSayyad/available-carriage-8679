import { Mongoconnect } from "../../../database/dbconnect";
import userModel from "../../../models/user.model";
const jwt = require("jsonwebtoken");

const Users = async (req, res) =>{
    const {method,body} = req;
    let deleteid = req.query.id;
    let updateid = req.query.id;
    await Mongoconnect();
    const token = req.headers?.authorization?.split(" ")[1];
    let payload ;
    let data ;

    if(token) {
        
        const decoded = jwt.decode(token);
        if(decoded.role === "admin"){
            switch(method){
                case "GET" : {
                    try{
                        const user =  await userModel.find();
                        console.log("users", user);
                        res.status(201).send(user)
                    }catch{
                        return res.send("error occured");
                    }
                }
                case "DELETE" :{
                    let data = await userModel.findByIdAndDelete(deleteid);
                    res.status(200).send({msg : "deleted", data});
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
    // const user =  await userModel.find();
    // console.log("users", user);
    // res.status(201).send(user)
}
export default Users
