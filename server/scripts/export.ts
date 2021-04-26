import { createConnection } from "typeorm";
import Product from "../src/entity/Product";
import Category from "../src/entity/Category";
import SizeOptions from "../src/entity/SizeOptions";
import User from "../src/entity/User";
import Order from "../src/entity/Order";
import { config } from "dotenv";
import { writeFile } from "fs/promises";

config();

function openConnection() {
    return createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "k88nj88oNeR",
        database: "ZimaLetto",
        synchronize: true,
        entities: [Product, Category, SizeOptions, User, Order],
    });
}

const exportDb = async () => {
    const connection = await openConnection();
    const categoryRepos = connection.getRepository(Category);
    const categoryList = await categoryRepos.find();
    // writeFile("JSONFolder/category.json", JSON.stringify(categoryList));

    const productRepos = connection.getRepository(Product);
    const productList = await productRepos.find({
        relations: ["category", "product_size"],
    });
    // writeFile("JSONFolder/product.json", JSON.stringify(productList));

    const sizeRepos = connection.getRepository(SizeOptions);
    const sizeList = await sizeRepos.find();
    // writeFile("JSONFolder/size_list.json", JSON.stringify(sizeList));

    const orderRepos = connection.getRepository(Order);
    const orderList = await orderRepos.find();
    // writeFile("JSONFolder/order.json", JSON.stringify(orderList));

    const userRepos = connection.getRepository(User);
    const userList = await userRepos.find();
    // writeFile("JSONFolder/user.json", JSON.stringify(userList));

    writeFile(
        "JSONFolder/allDb.json",
        JSON.stringify({
            categoryList,
            productList,
            sizeList,
            orderList,
            userList,
        })
    );
};

exportDb();
