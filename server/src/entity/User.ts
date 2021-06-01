import "reflect-metadata";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";

export enum UserRole {
    admin = "admin",
    manager = "manager",
}
@Entity("User")
export default class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", nullable: false })
    fname: string;

    @Column({ type: "varchar", nullable: true })
    lname: string;

    @Column({ type: "varchar", nullable: false, unique: true })
    email: string;

    @Column({ type: "varchar", nullable: true })
    phone_number1: string;

    @Column({ type: "varchar", nullable: true })
    phone_number2: string;

    @Column({ type: "varchar", nullable: false })
    password: string;

    @Column({ type: "varchar", nullable: true })
    user_role: UserRole;

    @OneToMany(() => Order, (order) => order.userId)
    orders: Order[];
}
