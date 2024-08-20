
import mongoose from 'mongoose'
const connectdb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://priyanshusharma442004:FgEz1mmbDlZ17Roy@cluster0.zon98.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("mongo db connected")
    }
    catch(error){
        console.log(error)
    }
}

export default connectdb