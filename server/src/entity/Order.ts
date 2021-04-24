import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Order")
export default class Order {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ type: "int", nullable: false })
    order_number: number;
    @Column({ type: "varchar", nullable: false })
    client_fname: string;
    @Column({ type: "varchar", nullable: false })
    client_lname: string;
    @Column({ type: "varchar", nullable: false })
    client_phone: string;
    // address
    @Column({ type: "json", nullable: false })
    products: string;
}
