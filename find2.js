var mongoose = require("mongoose");
mongoose.pluralize(null);
var EmpSchema = new mongoose.Schema({_id:Number,eno:Number, ename:String, esal:Number, eaddr:String });
var EmpModel = mongoose.model("employees",EmpSchema);
mongoose.connect("mongodb://localhost/test");
EmpModel.find(afterDataRecieved);
function afterDataRecieved(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
        // for(var i=0;i<data.length;i++){
        //     console.log("eno","-",data[i].eno,"-","ename","-",data[i].ename,"-","esal","-",data[i].esal,"-","eaddr","-",data[i].eaddr);
        // }
    }
    mongoose.disconnect();
}
