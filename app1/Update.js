const { MongoInvalidArgumentError } = require("mongodb");
var mongoose = require("mongoose");
mongoose.pluralize(null);
var markSchema = new mongoose.Schema({rollno : Number,name : String,maths : Number,english : Number,cppm : Number});
var markModel = mongoose.model("marksheet",markSchema);
mongoose.connect("mongodb://localhost/test");
markModel.findOne({rollno:4},afterDataRecieved);
function afterDataRecieved(error,data){
    if(error==null){
        data.rollno = 10;
        data.name = "rohan";
        data.maths = 15;
        data.english = 55;
        data.cppm = 98;
        console.log(data);
        data.save(afterDataUpdate)
        function afterDataUpdate(error2){
            if(error2==null){
                console.log("Update....");
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