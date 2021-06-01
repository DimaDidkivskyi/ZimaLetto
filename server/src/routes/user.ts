import { Router } from "express";
import User, { UserRole } from "../entity/User";
import Crypto from "crypto";
import { IReqDataUserRegister } from "../types";
import { createAccessToken, createRefreshToken } from "../auth/createToken";
import { decode, verify } from "jsonwebtoken";
import { emailSchema } from "../validation/user";
import { isAuthMiddleware } from "../utils/isAuth";

export const userRouter = Router();

const userPerPage = 20;

// GET ========================
userRouter.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page as string) || 0;
        const userRepository = req.db.getRepository(User);
        const userList = await userRepository.findAndCount({
            skip: userPerPage * (page - 1),
            take: userPerPage,
        });
        return res.json(userList);
    } catch (error) {
        return res.json({ ok: false, error });
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
            return res.json({ ok: false, message: "User not found" });
        }
        const sha = Crypto.createHash("sha512").update(String(body.password));
        const result = sha.digest("hex");
        if (result !== user.password) {
            return res.json({ ok: true, message: "Incorrect password" });
        }

        if (Object.values(UserRole).includes(user.user_role)) {
        }
        createRefreshToken({ id: user.id }, res);
        return res.json({
            ok: true,
            token: createAccessToken({ id: user.id }),
        });
    } catch (error) {
        return res.json({ ok: false, error });
    }
});

//LOGOUT
userRouter.get("/logout", async (_req, res) => {
    res.clearCookie("refreshToken");
    res.json({ ok: true, message: "Success" });
});

// REGISTRATION
userRouter.post("/registration", async (req, res) => {
    try {
        const body: IReqDataUserRegister = req.body;

        const { error } = emailSchema.validate(body);

        if (error) {
            return res.json({ ok: false, error });
        }

        const userRepository = req.db.getRepository(User);

        const sha = Crypto.createHash("sha512").update(String(body.password));
        const result = sha.digest("hex");

        const user = userRepository.create({ ...body, password: result });
        await userRepository.save(user);
        createRefreshToken({ id: user.id }, res);
        return res.json({
            ok: true,
            message: "User created",
            token: createAccessToken({ id: user.id }),
        });
    } catch (error) {
        if (error.code === "23505") {
            return res.json({ ok: false, error });
        }

        return res.json({ ok: false, error });
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
            return res.json({
                ok: true,
                token: createAccessToken({ id: decodeToken.id }),
            });
        }
        return res.json({ ok: false, message: "Failed refresh token" });
    } catch (error) {
        return res.json({ ok: false, error });
    }
});

userRouter.get("/me", isAuthMiddleware, async (req, res) => {
    try {
        const userRepository = req.db.getRepository(User);
        const user = await userRepository.findOne({ id: req.user?.id });
        return res.json({ ok: true, user });
    } catch (error) {
        return res.json({ ok: false, error });
    }
});

userRouter.post("/update", isAuthMiddleware, async (req, res) => {
    try {
        const userRepository = req.db.getRepository(User);

        if (req.body.password) {
            const sha = Crypto.createHash("sha512").update(
                String(req.body.password)
            );
            req.body.password = sha.digest("hex");
        }
        await userRepository.update({ id: req.user?.id }, req.body);
        return res.json({ ok: true, message: "Update is done" });
    } catch (error) {
        return res.json({ ok: false, error });
    }
});
