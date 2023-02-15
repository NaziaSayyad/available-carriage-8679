import mongoose from "mongoose"

export const Mongoconnect = async () =>{
     mongoose.set('strictQuery', true);
     
     mongoose.connect(process.env.mongodburl)
}