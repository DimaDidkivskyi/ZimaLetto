import express from "express";
import { createConnection } from "typeorm";
import { productRouter } from "./routes/product";
import { categoryRouter } from "./routes/category";
import { sizeRouter } from "./routes/size";
import { userRouter } from "./routes/user";
import { orderRouter } from "./routes/order";
import { config } from "dotenv";
import { authMiddleware } from "./auth/middleware";
import cookieParser from "cookie-parser";
import cors from "cors";
import { typeorm_conf } from "./utils/typeorm-conf";

config();
const port = process.env.PORT || 3000;

openConnection().then(async (connection) => {
    // const hello = await connection.getRepository("Product").find();
    const app = express();
    app.use(cors({ origin: [process.env.APP_URL || ""] }));
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(authMiddleware);
    app.use((req, _res, next) => {
        req.db = connection;
        return next();
    });
    app.use("/product", productRouter);
    app.use("/category", categoryRouter);
    app.use("/size", sizeRouter);
    app.use("/user", userRouter);
    app.use("/order", orderRouter);

    app.listen(port, () => {
        console.log("hello");
    });
});

function openConnection() {
    return createConnection(typeorm_conf);
}
