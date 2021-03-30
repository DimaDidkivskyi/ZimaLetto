import "reflect-metadata";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Product from "./Product";

@Entity("Category")
export default class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ type: "varchar", nullable: false })
    name: string;
    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
