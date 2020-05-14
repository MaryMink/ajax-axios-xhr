const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.listen(80);

app.use(express.static('public'));

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/username', urlencodedParser, (req, reply) => {
    console.log(req.body.data + " **Get");
    reply.status(200).send("User get is delivered.");
});

app.post('/username', urlencodedParser,(req, reply)=>{
    if(req.header["user-agent"] != "Safari/537.36"){
        console.log(req.body.data + "  **post");
        console.log(req.headers.origin); 
        reply.status(200).send("Delivered.");
        console.log("Not a chrome.")  
    }else{
        console.log("Сhrome want to accesst access is denied.")
    }
});