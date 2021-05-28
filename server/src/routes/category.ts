import { Router } from "express";
import Category from "../entity/Category.js";
import { productRouter } from "./product.js";

export const categoryRouter = Router();

// GET ===========================
categoryRouter.get("/", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        const categoryList = await categoryRepository.find({});
        return res.json(categoryList);
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

categoryRouter.get("/:id", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        const categoryList = await categoryRepository.findOne(
            { id: req.params.id },
            { relations: ["products"] }
        );
        return res.json(categoryList);
    } catch (error) {
        console.log(error);
        return res.send({ ok: false, error });
    }
});

// POST ===========================
categoryRouter.post("/", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        const category = categoryRepository.create(req.body);
        await categoryRepository.save(category);
        return res.json({ ok: true, message: "Post done" });
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

categoryRouter.post("/:id", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        await categoryRepository.update({ id: req.params.id }, req.body);
        return res.json({ ok: true, message: "Update done" });
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

// DELETE ========================
productRouter.delete("/:id", async (req, res) => {
    try {
        const categoryRepository = req.db.getRepository(Category);
        await categoryRepository.delete({ id: req.params.id });
        return res.json({ ok: true, message: "Delete is done" });
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});
