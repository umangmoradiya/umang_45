var mongoose = require("mongoose");
mongoose.pluralize(null);
var EmpSchema = new mongoose.Schema({_id:Number,eno:Number, ename:String, esal:Number, eaddr:String });
var EmpModel = mongoose.model("employees",EmpSchema);
mongoose.connect("mongodb://localhost/test");
EmpModel.findOne({"_id":5},afterDataRecieved);
function afterDataRecieved(error,data){
    if(error==null){
        data.eno = 500;
        data.ename = "akash";
        console.log(data);
        data.save(afterDataUpdate);
        function afterDataUpdate(error2){

                if(error2==null){
                    console.log("update");
                }
                else{
                    console.log(error2);
                }
                mongoose.disconnect();
            }
    }
    else{
        console.log(error);
    }
}