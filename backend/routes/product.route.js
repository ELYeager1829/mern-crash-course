import express from "express";

import { createProducts, deleteProducts, getProducts, UpdateProducts } from "../controller/product.controller.js";
const router = express.Router();

//get all
router.get('/api/products', getProducts );
//update
router.put('/api/product/:id', UpdateProducts);
//create product
router.use('/api/product', createProducts);
//delete 
router.delete('/api/product/:id', deleteProducts);

export default router;