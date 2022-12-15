import { Mongoconnect } from "../../../database/dbconnect";
import makeupModel from "../../../models/makeup.model";



export default async  function makeup_product(req,res){
         await Mongoconnect();
         const makeup = await makeupModel.find();
        res.status(201).send(makeup);
}
