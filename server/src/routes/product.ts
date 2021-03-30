import { Router } from "express";
import Product from "../entity/Product";

export const productRouter = Router();

productRouter.get("/", async (req, res) => {
    try {
        console.log(Product);
        const productRepository = req.db.getRepository(Product);
        const productList = await productRepository.find({
            relations: ["category"],
        });
        res.json(productList);
    } catch {
        res.send("Get error");
    }
});

productRouter.get("/:id", async (req, res) => {
    try {
        const productRepository = req.db.getRepository(Product);
        const productList = await productRepository.findOne({
            id: req.params.id,
        });
        res.json(productList);
    } catch (error) {
        res.json({ ok: false, error });
    }
});

productRouter.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const productRepository = req.db.getRepository(Product);
        const product = productRepository.create(req.body);
        await productRepository.save(product);
        res.send("Post done");
    } catch {
        res.send("Post error");
    }
});

productRouter.post("/:id", async (req, res) => {
    try {
        const productRepository = req.db.getRepository(Product);
        await productRepository.update({ id: req.params.id }, req.body);
        res.send("Post update is done");
    } catch {
        res.send("Post update error");
    }
});

productRouter.delete("/:id", async (req, res) => {
    try {
        const productRepository = req.db.getRepository(Product);
        await productRepository.delete({ id: req.params.id });
        res.send("Delete is done");
    } catch {
        res.send("Delete error");
    }
});
