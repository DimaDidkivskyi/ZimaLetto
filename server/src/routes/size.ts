import { Router } from "express";
import SizeOptions from "../entity/SizeOptions";

export const sizeRouter = Router();

sizeRouter.get("/", async (req, res) => {
    console.log(req.db);
    console.log(SizeOptions);
    const productRepository = req.db.getRepository(SizeOptions);
    const productList = await productRepository.find({});
    res.json(productList);
});
