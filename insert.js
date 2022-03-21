var mongoose = require("mongoose");
mongoose.pluralize(null);
var StudSchema = new mongoose.Schema({_id:Number,name : String, year : Number, marks : Number},{versionKey : false});
var Studmodel = mongoose.model("students",StudSchema);
mongoose.connect("mongodb://localhost/test");
var newStud = new Studmodel({"_id":9,"name":"akash","year":19,"marks":100})
newStud.save(afterDataInserted);
function afterDataInserted(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Document inserted......")
    }
    mongoose.disconnect();
}




