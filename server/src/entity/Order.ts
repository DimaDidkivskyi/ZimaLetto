import "reflect-metadata";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import Product from "./Product";

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
    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
    @Column({ type: "json", nullable: false })
    products_json: string;
}
