import "reflect-metadata";
import { Entity, EntitySchema } from "typeorm";
import { Product } from "./../model/Product.js";

export default new EntitySchema({
    name: "Product",
    target: Product,
    columns: {
        id: {
            type: "uuid",
            primary: true,
            nullable: false,
        },
        name: {
            type: "varchar",
            nullable: false,
        },
        price: {
            type: "money",
            nullable: false,
        },
        color: {
            type: "varchar",
            nullable: false,
        },
        image: {
            type: "varchar",
            nullable: false,
        },
        category: {
            type: "varchar",
            nullable: false,
        },
        description: {
            type: "varchar",
            nullable: false,
        },
    },
    relations: {
        sizes: {
            target: "Size",
            type: "one-to-many",
        },
    },
});
