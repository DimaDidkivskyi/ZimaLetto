import express from "express";
import typeorm from "typeorm";
import Product from "./entity/ProductSchema.js";
import User from "./entity/UserSchema.js";
import Size from "./entity/SizeSchema.js";
import { productRouter } from "./routes/product.js";

const port = process.env.PORT || 3000;

openConnection().then(async (connection) => {
    // const hello = await connection.getRepository("Product").find();
    const app = express();
    app.use((req, res, next) => {
        req.db = connection;
        return next();
    });
    app.use("/product", productRouter);

    app.listen(port, () => {
        console.log("hello");
    });
});

function openConnection() {
    return typeorm.createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "k88nj88oNeR",
        database: "ZimaLetto",
        synchronize: true,
        entities: [Product, User, Size],
        entitySchemas: [Product, User, Size],
    });
}
