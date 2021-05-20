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

    @Column({ type: "varchar", nullable: false })
    client_fname: string;

    @Column({ type: "varchar", nullable: false })
    client_lname: string;

    @Column({ type: "varchar", nullable: false })
    client_phone: string;

    @Column({ type: "varchar", nullable: true })
    client_address: string;

    @Column({ type: "uuid", nullable: true })
    userId: string;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
}
