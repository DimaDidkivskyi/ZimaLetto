import "reflect-metadata";
import { Entity, EntitySchema } from "typeorm";
import { Size } from "./../model/Size.js";

export default new EntitySchema({
    name: "Size",
    target: Size,
    columns: {
        id: {
            type: "uuid",
            primary: true,
            nullable: false,
        },
        size_name: {
            type: "varchar",
            nullable: false,
        },
    },
    relations: {
        product: {
            target: "Product",
            type: "many-to-one",
        },
    },
});
