const  express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const PORT =3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/',function(req, res){
    res.send("Hello from the other side");
})
app.post('/enr',function(req, res){
    console.log(req.body);
    res.status(200).send({"message":"Data received"});
})
app.listen(PORT, function(){
    console.log("server running in the localhost:"+ PORT);
}); 