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
import path from "path";

config();
const port = process.env.PORT || 3000;

openConnection().then(async (connection) => {
    const app = express();
    app.use("/", express.static("public"));
    app.use(cors({ origin: [process.env.APP_URL || ""], credentials: true }));
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(authMiddleware);
    app.use((req, _res, next) => {
        req.db = connection;
        return next();
    });
    app.use("/api/product", productRouter);
    app.use("/api/category", categoryRouter);
    app.use("/api/size", sizeRouter);
    app.use("/api/user", userRouter);
    app.use("/api/order", orderRouter);

    app.use((_req, res) => {
        res.sendFile(path.resolve(__dirname, "./../public/index.html"));
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});

function openConnection() {
    return createConnection(typeorm_conf);
}
