import { Router } from "express";
import User from "../entity/User";

export const userRouter = Router();

userRouter.get("/", async (req, res) => {
    console.log(req.db);
    console.log(User);
    const productRepository = req.db.getRepository(User);
    const productList = await productRepository.find({});
    res.json(productList);
});
