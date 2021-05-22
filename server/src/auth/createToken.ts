import { sign } from "jsonwebtoken";
import { Response } from "express";

export const createAccessToken = (payload: Parameters<typeof sign>[0]) => {
    return sign(payload, process.env.JWT_SECRET || "", {
        expiresIn: process.env.NODE_ENV === "production" ? "15m" : "7d",
    });
};

export const createRefreshToken = (
    payload: Parameters<typeof sign>[0],
    res: Response
) => {
    res.cookie(
        "refreshToken",
        sign(payload, process.env.JWT_SECRET || "", { expiresIn: "7d" }),
        {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        }
    );
};
