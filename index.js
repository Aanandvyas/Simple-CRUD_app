const express = require('express');
const app = express();
const port = 3000;
const ProductRoutes = require('./routes/product.route');
const Product = require('./models/product.model');

//Midlleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Mongoose
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
mongoose.connect('mongodb+srv://vyasanand:vyasanand0007@tanya.mk3jzty.mongodb.net/NodeApi?retryWrites=true&w=majority&appName=Tanya')
.then(()=>{
    console.log("connected to database");
    app.listen(port,()=>{
        console.log(`running port on port ${port}`);
    })
})
.catch(()=>{
    console.log("error in the connection");
})

//check

app.get('/',(req,res)=>{
    res.send("hello from node api server updated");
})

//routes

app.use('/api/products',ProductRoutes);

