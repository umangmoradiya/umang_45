const { Console } = require("console");
var mongoose = require("mongoose");
mongoose.pluralize(null);
var EmpSchema = new mongoose.Schema({_id:Number,eno:Number,ename:String,esal:Number,eaddr:String});
var EmpModel = mongoose.model("employees",EmpSchema);
mongoose.connect("mongodb://localhost/test");
EmpModel.deleteOne({"ename":"Bunny"},afterDataRecieved);
function afterDataRecieved(error,data){
    if(error){
        
        console.log(data);
    }

    else{
        console.log("data deleted....");
    }
    mongoose.disconnect();
}