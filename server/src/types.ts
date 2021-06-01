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
    price: string;
    image: string;
    description: string;
    details: string;
    is_visible: string;
    category: any;
    product_size: string[];
}

export interface IReqDataUserRegister {
    email: string;
    password: string;
}

export interface IReqDataOrder {
    client_fname: string;
    client_lname: string;
    client_phone: string;
    client_address: string;
    products: { id: string; quantity: number }[];
}
