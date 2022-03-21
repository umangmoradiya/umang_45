var mongoose = require("mongoose");
mongoose.pluralize(null);
var StudSchema = new mongoose.Schema({ name: String, year: Number, marks: Number });
var Studmodel = mongoose.model("students", StudSchema);
mongoose.connect("mongodb://localhost/test");
Studmodel.find(afterDatarecieved);
function afterDatarecieved(error, data) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
        // for(var i=0 ;i<data.length;i++){
        //     console.log(data[i].name,"-",data[i].year,"-",data[i].marks);
        // }
    }
    mongoose.disconnect();
}


