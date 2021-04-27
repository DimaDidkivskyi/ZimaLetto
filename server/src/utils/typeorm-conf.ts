import Product from "../entity/Product";
import Category from "../entity/Category";
import SizeOptions from "../entity/SizeOptions";
import User from "../entity/User";
import Order from "../entity/Order";
import { createConnection } from "typeorm";
import { config } from "dotenv";

config();

export const typeorm_conf = {
    type: "postgres",
    host: process.env.DATABASE_HOST || "",
    port: 5432,
    username: process.env.DATABASE_USERNAME || "",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE_NAME || "",
    synchronize: true,
    entities: [Product, Category, SizeOptions, User, Order],
} as Parameters<typeof createConnection>[0];
