import { Router } from "express";
import Order from "../entity/Order";
import Product from "../entity/Product";
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
        const productRepository = req.db.getRepository(Product);
        const orderProducts = await productRepository.find({
            where: body.products.map(({ id }) => {
                return { id };
            }),
        });
        const mappedProducts = orderProducts.map((product) => {
            const productQuantity = body.products.find(
                (productWithQuantity) => product.id === productWithQuantity.id
            );
            return {
                id: product.id,
                quantity: productQuantity?.quantity,
                product_price: product.price,
            };
        });

        let totalSum = 0;

        for (let i = 0; i < mappedProducts.length; i++) {
            totalSum +=
                mappedProducts[i].quantity! *
                parseFloat(mappedProducts[i].product_price.replace("$", ""));
        }
        const order = orderRepository.create({
            ...body,
            userId: req.user?.id,
            products: orderProducts,
            totalSum,
            productJSON: JSON.stringify(mappedProducts),
        });
        await orderRepository.save(order);
        return res.json({ ok: true, message: "Order created" });
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});
