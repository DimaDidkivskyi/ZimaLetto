import { Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

export const authMiddleware = (
    req: Request,
    _res: Response,
    next: () => void
) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (token && verify(token, process.env.JWT_SECRET || "")) {
            req.user = (decode(token) as { id: string }) || undefined;
        }
    } catch (error) {
        console.log(error);
    }
    next();
};
