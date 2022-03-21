var mongoose = require("mongoose");
mongoose.pluralize(null);
var EmpSchema = new mongoose.Schema({ _id:Number,eno: Number, ename: String, esal: Number, eaddr: String },{versionKey : false});
var EmpModel = mongoose.model("employees",EmpSchema);
mongoose.connect("mongodb://localhost/test");
var newEmp = new EmpModel({"_id":8,"eno": 381,"ename":"akash","esal":50000,"eaddr":"surat"});
newEmp.save(afterDataInserted);
function afterDataInserted(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Document Inserted...............");
    }
    mongoose.disconnect();
}


