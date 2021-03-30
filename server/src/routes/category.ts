import { Router } from "express";
import Category from "../entity/Category.js";
import { productRouter } from "./product.js";

export const categoryRouter = Router();

categoryRouter.get("/", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        const categoryList = await categoryRepository.find({
            relations: ["products"],
        });
        res.json(categoryList);
    } catch (error) {
        res.json({ ok: false, error });
    }
});

categoryRouter.get("/:id", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        const categoryList = await categoryRepository.findOne(
            { id: req.params.id },
            { relations: ["products"] }
        );
        res.json(categoryList);
    } catch {
        res.send("Get one error");
    }
});

categoryRouter.post("/", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        const category = categoryRepository.create(req.body);
        await categoryRepository.save(category);
        res.send("Post is done");
    } catch {
        res.send("Post error");
    }
});

categoryRouter.post("/:id", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        await categoryRepository.update({ id: req.params.id }, req.body);
        res.send("Post update is done");
    } catch {
        res.send("Post update error");
    }
});

productRouter.delete("/:id", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        await categoryRepository.delete({ id: req.params.id });
        res.send("Delete is done");
    } catch {
        res.send("Delete error");
    }
});
