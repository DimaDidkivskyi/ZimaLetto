import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("SizeOptions")
export default class SizeOptions {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", nullable: false })
    size_name: string;

    @Column({ type: "varchar", nullable: true })
    size_description: string;
}
