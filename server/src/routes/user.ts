import { Router } from "express";
import User from "../entity/User";
import Crypto from "crypto";
import { IReqDataUserRegister } from "../types";
import { createAccessToken, createRefreshToken } from "../auth/createToken";
import { decode, verify } from "jsonwebtoken";

export const userRouter = Router();

// GET ========================
userRouter.get("/", async (req, res) => {
    try {
        console.log(req.db);
        console.log(User);
        const productRepository = req.db.getRepository(User);
        const productList = await productRepository.find({});
        return res.json(productList);
    } catch (error) {
        console.log(error);
        return res.send("Get error");
    }
});

// POST =========================
// LOGIN
userRouter.post("/login", async (req, res) => {
    try {
        console.log(req.user);
        const body: IReqDataUserRegister = req.body;
        const userRepository = req.db.getRepository(User);
        const user = await userRepository.findOne({ email: body.email });
        if (!user) {
            return res.send("User not found");
        }
        const sha = Crypto.createHash("sha512").update(String(body.password));
        const result = sha.digest("hex");
        if (result !== user.password) {
            return res.send("Incorrect password");
        }
        createRefreshToken({ id: user.id }, res);
        return res.send(createAccessToken({ id: user.id }));
    } catch (error) {
        console.log(error);
        return res.send("Login error");
    }
});

// REGISTER
userRouter.post("/register", async (req, res) => {
    try {
        const body: IReqDataUserRegister = req.body;
        const userRepository = req.db.getRepository(User);
        const sha = Crypto.createHash("sha512").update(String(body.password));
        const result = sha.digest("hex");
        const user = userRepository.create({ ...body, password: result });
        await userRepository.save(user);
        return res.send(`User created ${result}`);
    } catch (error) {
        if (error.code === "23505") {
            return res.send("Email already taken");
        }
        console.log(error);
        return res.send("User creation error");
    }
});

// Authorization
userRouter.post("/refresh_token", async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (
            refreshToken &&
            verify(refreshToken, process.env.JWT_SECRET || "")
        ) {
            const decodeToken = decode(refreshToken) as { id: string };
            createRefreshToken({ id: decodeToken.id }, res);
            return res.send(createAccessToken({ id: decodeToken.id }));
        }
        return res.send("Refresh token access");
    } catch (error) {
        console.log(error);
        return res.send("Refresh token error");
    }
});

userRouter.get("/me", async (req, res) => {
    try {
        const userRepository = req.db.getRepository(User);
        const user = await userRepository.findOne({ id: req.user?.id });
        console.log();
        res.send(JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
});
