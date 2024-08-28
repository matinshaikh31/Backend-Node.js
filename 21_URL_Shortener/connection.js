const mongoose = require("mongoose")
const connectToMongoDb =async (url)=>{
      await mongoose.connect(url)
}
module.exports=connectToMongoDb;