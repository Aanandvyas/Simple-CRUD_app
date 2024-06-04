const Product = require('../models/product.model');

const getProducts = async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
}

const getProduct = async (req,res) => {
    try{
        const { id }= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const createProduct = async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const updateProduct = async(req,res)=>{
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            return res.status(404).json({msg:"product not found"})
        }

        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);

    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
}

const deleteProduct = async (req,res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json({msg:"Product deleted successfully"});

        if(!product){
            return res.status(404).json({msg:"product not found"});
        }
    }
    catch(error){
        res.status(500).json({msg:error.msg});
    }
}

module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}