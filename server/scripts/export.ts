import { createConnection } from "typeorm";
import Product from "../src/entity/Product";
import Category from "../src/entity/Category";
import SizeOptions from "../src/entity/SizeOptions";
import User from "../src/entity/User";
import Order from "../src/entity/Order";
import { config } from "dotenv";
import { writeFile } from "fs/promises";
import { typeorm_conf } from "../src/utils/typeorm-conf";

config();

function openConnection() {
    return createConnection(typeorm_conf);
}

const exportDb = async () => {
    const connection = await openConnection();
    const categoryRepos = connection.getRepository(Category);
    const categoryList = await categoryRepos.find();

    const productRepos = connection.getRepository(Product);
    const productList = await productRepos.find({
        relations: ["category", "product_size"],
    });

    const sizeRepos = connection.getRepository(SizeOptions);
    const sizeList = await sizeRepos.find();

    const orderRepos = connection.getRepository(Order);
    const orderList = await orderRepos.find();

    const userRepos = connection.getRepository(User);
    const userList = await userRepos.find();

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
