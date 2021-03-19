import { Router } from "express";
import { Product } from "../model/Product.js";

export const productRouter = Router();

productRouter.get("/", async (req, res) => {
    console.log(req.db);
    const productRepository = req.db.getRepository(Product);
    const productList = await productRepository.find({});
    res.json(productList);
});
