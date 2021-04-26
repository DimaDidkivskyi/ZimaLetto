import { Router } from "express";
import Order from "../entity/Order";
import { IReqDataOrder } from "../types";

export const orderRouter = Router();
export const productRouter = Router();

// GET ====================
orderRouter.get("/", async (req, res) => {
    try {
        const orderRepository = req.db.getRepository(Order);
        const orderList = await orderRepository.find({});
        return res.send(orderList);
    } catch (error) {
        console.log(error);
        return res.send("Get error");
    }
});

orderRouter.get("/:id", async (req, res) => {
    try {
        const orderRepository = req.db.getRepository(Order);
        const orderList = await orderRepository.findOne({ id: req.params.id });
        return res.send(orderList);
    } catch (error) {
        console.log(error);
        return res.send("Get one error");
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
        return res.send("Done");
    } catch (error) {
        console.log(error);
        return res.send("Post error");
    }
});
