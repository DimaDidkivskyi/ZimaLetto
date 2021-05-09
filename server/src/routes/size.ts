import { Router } from "express";
import SizeOptions from "../entity/SizeOptions";

export const sizeRouter = Router();

// GET ===========================
sizeRouter.get("/", async (req, res) => {
    try {
        console.log(req.db);
        console.log(SizeOptions);
        const sizeRepository = req.db.getRepository(SizeOptions);
        const sizeList = await sizeRepository.find({});
        return res.json(sizeList);
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});
