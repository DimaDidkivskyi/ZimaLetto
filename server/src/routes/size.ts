import { Router } from "express";
import SizeOptions from "../entity/SizeOptions";

export const sizeRouter = Router();

// GET ===========================
sizeRouter.get("/", async (req, res) => {
    try {
        console.log(req.db);
        console.log(SizeOptions);
        const productRepository = req.db.getRepository(SizeOptions);
        const productList = await productRepository.find({});
        return res.json(productList);
    } catch (error) {
        console.log(error);
        return res.send("Get error");
    }
});
