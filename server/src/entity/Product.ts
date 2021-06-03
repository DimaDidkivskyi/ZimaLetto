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

@Entity("Product") //Створення таблиці "Product"
export default class Product {
    @PrimaryGeneratedColumn("uuid") // Створення поля id та назначення його PK в таблиці "product"
    id: string;

    @Column({ type: "varchar", nullable: false }) // Створення поля name в таблиці "product"
    name: string;

    @Column({ type: "money", nullable: false }) // Створення поля price в таблиці "product"
    price: string;

    @Column({ type: "varchar", nullable: false }) // Створення поля image в таблиці "product"
    image: string;

    @Column({ type: "varchar", nullable: false }) // Створення поля description в таблиці "product"
    description: string;

    @Column({ type: "varchar", nullable: true }) // Створення поля details в таблиці "product"
    details: string;

    @Column({ type: "boolean", nullable: true }) // Створення поля is_visible в таблиці "product"
    is_visible: string;

    @ManyToOne(() => Category, (category) => category.products) // Створення поля category, яке буде FK, і пов'язано з таблицею "Category"
    category: Category;

    @ManyToMany(() => SizeOptions) // Створення поля price в таблиці product
    @JoinTable()
    product_size: SizeOptions[];
}
