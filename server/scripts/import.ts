import { createConnection } from "typeorm";
import Product from "../src/entity/Product";
import Category from "../src/entity/Category";
import SizeOptions from "../src/entity/SizeOptions";
import User from "../src/entity/User";
import Order from "../src/entity/Order";
import { config } from "dotenv";
import { readFile } from "fs/promises";

config();

function openConnection() {
    return createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "k88nj88oNeR",
        database: "test",
        synchronize: true,
        entities: [Product, Category, SizeOptions, User, Order],
    });
}

const importDb = async () => {
    const connection = await openConnection();
    const database = await readFile("JSONFolder/allDb.json");

    const databaseJson: {
        categoryList: Omit<Category, "products">[];
        productList: Product[];
        sizeList: SizeOptions[];
        orderList: Order[];
        userList: User[];
    } = JSON.parse(database.toString());

    const categoryRepository = connection.getRepository(Category);

    for (let i = 0; i < databaseJson.categoryList.length; i++) {
        databaseJson.categoryList[i] = categoryRepository.create(
            databaseJson.categoryList[i]
        );
    }
    const sizeRepository = connection.getRepository(SizeOptions);

    for (let i = 0; i < databaseJson.sizeList.length; i++) {
        databaseJson.sizeList[i] = sizeRepository.create(
            databaseJson.sizeList[i]
        );
    }

    const productRepository = connection.getRepository(Product);

    for (let i = 0; i < databaseJson.productList.length; i++) {
        const sizes = databaseJson.productList[i].product_size.map(
            (size) => size.id
        );
        if (i == 0) {
            console.log(sizes);
        }
        databaseJson.productList[i].product_size = databaseJson.sizeList.filter(
            (size) => {
                return sizes.includes(size.id);
            }
        );
        if (i == 0) {
            console.log(databaseJson.productList[i].product_size);
        }
        databaseJson.productList[i] = productRepository.create(
            databaseJson.productList[i]
        );
    }

    const orderRepository = connection.getRepository(Order);

    for (let i = 0; i < databaseJson.orderList.length; i++) {
        const products = databaseJson.orderList[i].products.map(
            (size) => size.id
        );
        databaseJson.orderList[i].products = databaseJson.productList.filter(
            (orderNum) => {
                return products.includes(orderNum.id);
            }
        );
        databaseJson.orderList[i] = orderRepository.create(
            databaseJson.orderList[i]
        );
    }

    const userRepository = connection.getRepository(User);

    for (let i = 0; i < databaseJson.userList.length; i++) {
        databaseJson.userList[i] = userRepository.create(
            databaseJson.userList[i]
        );
    }
    console.log("almost done");

    await categoryRepository.save(databaseJson.categoryList);

    await sizeRepository.save(databaseJson.sizeList);

    await productRepository.save(databaseJson.productList);

    await orderRepository.save(databaseJson.orderList);

    await userRepository.save(databaseJson.userList);

    console.log("done");
};

importDb();
