const express = require ("express") ;
var cors = require('cors');
const app = express() ;
const port = 8081 ;

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("hello world, i am pushkar");
});

app.get("/user", (req, res) => {
    res.send({
        id: 1,
        'firstName': "Puru",
        lastName: "Rajput"
      });
});

app.listen(port,()=> {
    console.log('Example app listening at http://localhost:${port}');
});

