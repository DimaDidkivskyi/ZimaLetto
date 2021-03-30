import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export default class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ type: "varchar", nullable: false })
    fname: string;
    @Column({ type: "varchar", nullable: false })
    lname: string;
    @Column({ type: "varchar", nullable: false })
    email: string;
    @Column({ type: "varchar", nullable: true })
    phone_number1: string;
    @Column({ type: "varchar", nullable: true })
    phone_number2: string;
    @Column({ type: "varchar", nullable: false })
    password: string;
}
