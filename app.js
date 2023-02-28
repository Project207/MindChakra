const  experess = require("express");
const app = experess();
const bodyParser = require("body-parser");

app.use(experess.static("public"));
app.use(bodyParser.urlencoded({ extended:true }));

app.get("/",function(req,res){
   res.send("Rj");
});


 app.listen(process.env.PORT || 3000,function(req,res){
    console.log("Server is runnig on port 3000")
})