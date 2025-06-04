import Product from '../model/product.model.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });

    } catch (error) {
        console.error("Error in getting product :", error.message);
        res.status(404).json({ success: false, message: "Server error" });

    }
};

export const createProducts =async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, newProduct });


    } catch (error) {
        console.error("Error in create product :", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }

};

export const UpdateProducts = async (req, res) => {
    const { id } = req.params;


    const product = req.body;
    
   
    try {
        const updatedproduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({ success: true, data: updatedproduct });

    } catch (error) {
        console.error("Error in updating product :", error.message);
        res.status(404).json({ success: false, message: "Server error" });

    }
};

export const deleteProducts =async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(201).json({ success: true, message: "Product deleted" });

    } catch (error) {
        res.status(404).json({ success: false, message: "Product not found" });

    }
};