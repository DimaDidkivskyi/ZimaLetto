import { Router } from "express";
import Product from "../entity/Product";
import SizeOptions from "../entity/SizeOptions";
import { IReqDataProduct } from "../types";
import { exportFile } from "../utils/S3";
import multer from "multer";

export const productRouter = Router();

const productPerPage = 9;

// GET ===========================
productRouter.get("/", async (req, res) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const productRepository = req.db.getRepository(Product);
        // const numOfProduct = await productRepository.findAndCount()
        const productList = await productRepository.findAndCount({
            relations: ["category", "product_size"],
            skip: productPerPage * (page - 1),
            take: productPerPage,
        });
        return res.json(productList);
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

productRouter.get("/:id", async (req, res) => {
    try {
        const productRepository = req.db.getRepository(Product);
        const productList = await productRepository.findOne(
            {
                id: req.params.id,
            },
            { relations: ["category", "product_size"] }
        );
        return res.json(productList);
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

const upload = multer();

// POST ==========================
productRouter.post("/", upload.single("image"), async (req, res) => {
    try {
        const body: IReqDataProduct = req.body;
        const productRepository = req.db.getRepository(Product);
        const sizeRepository = req.db.getRepository(SizeOptions);
        const image = await exportFile(req.file);
        const productsSizes = await sizeRepository.find({
            where: body.product_size.map((size) => {
                return { id: size };
            }),
        });
        const product = productRepository.create({
            ...body,
            image,
            product_size: productsSizes,
        });
        await productRepository.save(product);
        return res.json({ ok: true, message: "Post done" });
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

productRouter.post("/:id", upload.single("image"), async (req, res) => {
    try {
        const body: IReqDataProduct = req.body;

        const productRepository = req.db.getRepository(Product);

        const sizeRepository = req.db.getRepository(SizeOptions);

        const product = await productRepository.findOne(
            { id: req.params.id },
            { relations: ["category", "product_size"] }
        );
        if (!product) {
            throw new Error(`Product not found ${req.params.id}`);
        }

        const productKeys: Array<keyof Omit<Product, "id">> = [
            "category",
            "description",
            "details",
            "is_visible",
            "name",
            "price",
        ];

        const productsSizes = await sizeRepository.find({
            where: body.product_size.map((size) => {
                return { id: size };
            }),
        });

        for (const key of productKeys) {
            //@ts-ignore
            product[key] = body[key];
        }

        product.product_size = productsSizes;

        if (req.file) {
            product.image = await exportFile(req.file);
        }

        // await productRepository
        //     .createQueryBuilder()
        //     .relation(Product, "product_size")
        //     .of(product)
        //     .addAndRemove(productsSizes, product.product_size);
        // delete req.body.product_size;

        await productRepository.save(product);

        return res.json({ ok: true, message: "Update is done" });
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});
// DELETE ========================
productRouter.delete("/:id", async (req, res) => {
    try {
        const productRepository = req.db.getRepository(Product);
        await productRepository.delete({ id: req.params.id });
        return res.json({ ok: true, message: "Delete is done" });
    } catch (error) {
        console.log(error);
        return res.json({ ok: true, error });
    }
});
