import { Mongoconnect } from "../../../database/dbconnect";
import skincareModel from "../../../models/skincare.model";

export default async  function makeup_product(req,res){
         await Mongoconnect();
         const skincare = await skincareModel.find();
        res.status(201).send(skincare);
}
