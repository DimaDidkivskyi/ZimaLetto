import { Router } from "express";
import Order from "../entity/Order";
import { IReqDataOrder } from "../types";

export const orderRouter = Router();
export const productRouter = Router();

const orderPerPage = 20;

// GET ====================
orderRouter.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page as string) || 0;
        const orderRepository = req.db.getRepository(Order);
        const orderList = await orderRepository.findAndCount({
            skip: orderPerPage * (page - 1),
            take: orderPerPage,
        });
        return res.json(orderList);
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

orderRouter.get("/:id", async (req, res) => {
    try {
        const orderRepository = req.db.getRepository(Order);
        const orderList = await orderRepository.findOne({ id: req.params.id });
        return res.json(orderList);
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

// POST ====================
orderRouter.post("/", async (req, res) => {
    try {
        const body: IReqDataOrder = req.body;
        const orderRepository = req.db.getRepository(Order);
        const order = orderRepository.create(body);
        // //productList it`s json
        await orderRepository.save(order);
        return res.json({ ok: true, message: "Order created" });
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});
