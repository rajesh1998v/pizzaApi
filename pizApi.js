let express = require("express") ;
let app = express();
app.use(express.json ());
app.use( function (req, res, next) {
res.header("Access-Control-Allow-Origin","*");
res.header( "Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD");
res. header( "Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
next();
});
const port = 2410;
app.listen(port,()=>console.log(`Listening on port ${port}!`));

let {foodsData} = require("./data");


 app.get("/vegPizza",function(req,res){
    let vegPizza = foodsData.filter(ft=>ft.type==="Pizza" && ft.veg==="Yes");
    res.send(vegPizza);
 })

 app.get("/nonVegPizza",function(req,res){
    let vegPizza = foodsData.filter(ft=>ft.type==="Pizza" && ft.veg==="No");
    res.send(vegPizza);
 })
 
 app.get("/sideDish",function(req,res){
    let SideDish = foodsData.filter(ft=>ft.type==="SideDish");
    res.send(SideDish);
 })

 app.get("/otherItems",function(req,res){
    let Beverage = foodsData.filter(ft=>ft.type==="Beverage");
    res.send(Beverage);
 })

