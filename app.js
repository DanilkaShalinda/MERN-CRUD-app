const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
//body parser used for conver JSON format to js
const app = express();
const port = 3500;
const DB_URL = "mongodb+srv://Danilka:1234@mernapp.vxnt5l1.mongodb.net/?retryWrites=true&w=majority";
//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(body_parser.json());

app.use(postRoutes);


mongoose.connect(DB_URL,{useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
        console.log('DB Has Connected Successfully');
    })
    .catch((err)=> console.log('DB not Connected Successfully'))


app.listen(port,() =>{
    console.log('App Is Running On '+ port);
});

