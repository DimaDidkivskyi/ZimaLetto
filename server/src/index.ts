import express from "express";
import { createConnection } from "typeorm";
import Product from "./entity/Product";
import { productRouter } from "./routes/product";
import Category from "./entity/Category";
import { categoryRouter } from "./routes/category";
import SizeOptions from "./entity/SizeOptions";
import { sizeRouter } from "./routes/size";
import User from "./entity/User";
import { userRouter } from "./routes/user";

const port = process.env.PORT || 3000;

openConnection().then(async (connection) => {
    // const hello = await connection.getRepository("Product").find();
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use((req, _res, next) => {
        req.db = connection;
        return next();
    });
    app.use("/product", productRouter);
    app.use("/category", categoryRouter);
    app.use("/size", sizeRouter);
    app.use("/user", userRouter);

    app.listen(port, () => {
        console.log("hello");
    });
});

function openConnection() {
    return createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "k88nj88oNeR",
        database: "ZimaLetto",
        synchronize: true,
        entities: [Product, Category, SizeOptions, User],
    });
}
