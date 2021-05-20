import { Request, Response } from "express";

export const isAuthMiddleware = (
    req: Request,
    res: Response,
    next: () => void
) => {
    if (req.user?.id) {
        return next();
    }
    res.json({ ok: false, error: "Not authorized" });
};
