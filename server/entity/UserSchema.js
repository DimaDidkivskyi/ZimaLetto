import "reflect-metadata";
import { Entity, EntitySchema } from "typeorm";
import { User } from "./../model/User.js";

export default new EntitySchema({
    name: "User",
    target: User,
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
        surname: {
            type: "varchar",
            nullable: false,
        },
        secondname: {
            type: "varchar",
            nullable: false,
        },
        email: {
            type: "varchar",
            nullable: false,
        },
        phone_number: {
            type: "varchar",
            nullable: true,
        },
        phone_number2: {
            type: "varchar",
            nullable: true,
        },
        password: {
            type: "varchar",
            nullable: false,
        },
    },
});
