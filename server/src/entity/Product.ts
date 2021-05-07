import "reflect-metadata";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import Category from "./Category";
import SizeOptions from "./SizeOptions";

@Entity("Product")
export default class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ type: "varchar", nullable: false })
    name: string;
    @Column({ type: "money", nullable: false })
    price: number;
    @Column({ type: "varchar", nullable: false })
    image: string;
    @Column({ type: "varchar", nullable: false })
    description: string;
    @Column({ type: "varchar", nullable: true })
    detailed_description: string;
    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
    @ManyToMany(() => SizeOptions)
    @JoinTable()
    product_size: SizeOptions[];
}
