import { Connection } from "typeorm";
declare global {
    namespace Express {
        export interface Request {
            db: Connection;
            user?: { id: string };
        }
    }
}

export interface IReqDataProduct {
    name: string;
    price: number;
    image: string;
    description: string;
    category: any;
    product_size: string[];
}

export interface IReqDataUserRegister {
    email: string;
    password: string;
}

export interface IReqDataOrder {
    order_number: number;
    client_fname: string;
    client_lname: string;
    client_phone: string;
    products: { id: string; quantity: number }[];
    products_json: string;
}
