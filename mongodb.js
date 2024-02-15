const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/roombooking')
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed to connect");

})
const loginschema=new mongoose.Schema({
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    }
});
const collection =new mongoose.model("collection1",loginschema)
module.exports=collection;