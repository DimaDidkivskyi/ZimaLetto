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
    // GET запит для виведення інформації про усі продукти
    try {
        // Якщо помилок немає
        const page = parseInt(req.query.page as string) || 1; // Визначення номеру сторінки для пагінації
        const categoryId = req.query.category; // Отримання id категорії
        const productRepository = req.db.getRepository(Product); // Отримання доступу до репозиторії продуктів

        const productList = await productRepository.findAndCount({
            // Отримання списку продуктів
            where: {
                // Оператор умови який буде шакати продукти які мають відповідний номер категорії та поле "is_visible" = true
                ...(categoryId && { category: categoryId }),
                is_visible: true,
            },
            relations: ["category", "product_size"], // Отримання зв'язаних з продуктом даних
            skip: productPerPage * (page - 1), // Пропуск певної кількості продуктів, функція пагінації
            take: productPerPage, // Отримання певної кількості товарів
        });
        return res.json(productList); // Повернення списку отриманих продуктів
    } catch (error) {
        // Якщо винекне помилка
        console.log(error); // Помилку вивести до консолі
        return res.json({ ok: false, error }); // До front-end частини повернути JSON з помилкою
    }
});

productRouter.get("/:id", async (req, res) => {
    // GET запит для отримання інформації про один продукт
    try {
        const productRepository = req.db.getRepository(Product);
        const productList = await productRepository.findOne(
            {
                id: req.params.id, // Параметр за котрим буде шукатись продукт
            },
            { relations: ["category", "product_size"] } // Разом з продуктом вивести його зв'язки
        );
        return res.json(productList); // повернути отриманий продукт
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

const upload = multer();

// POST ==========================
productRouter.post("/", upload.single("image"), async (req, res) => {
    // POST запит для додавання продукту
    try {
        const body: IReqDataProduct = req.body; // Інтерфейс для отримання даних з вебсайту
        const productRepository = req.db.getRepository(Product);
        const sizeRepository = req.db.getRepository(SizeOptions); // Отримання доступу до репозиторії розмірів
        const image = await exportFile(req.file); // Визначення що image це файл який відправляється з вебсайту
        const productsSizes = await sizeRepository.find({
            // Пошук відправлених розмірів репозиторії
            where: body.product_size.map((size) => {
                return { id: size }; // Якщо такі розміри є, то повернути id розміру
            }),
        });
        const product = productRepository.create({
            // Створення продукту
            ...body, // Запис отриманої інформації з вебсайту
            image, // Запис шляху до картинки
            product_size: productsSizes, // Запис отриманих розмірів
        });
        await productRepository.save(product); // Зберігання продукту в репозиторії
        return res.json({ ok: true, message: "Post done" }); // Поверннення інформації про успішне виконання функції
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});

productRouter.post("/:id", upload.single("image"), async (req, res) => {
    // POST запит зміни продукту
    try {
        const body: IReqDataProduct = req.body;
        const productRepository = req.db.getRepository(Product);
        const sizeRepository = req.db.getRepository(SizeOptions);
        const product = await productRepository.findOne(
            // Пошук одного продукту
            { id: req.params.id }, // Пошук продукту за праметром id
            { relations: ["category", "product_size"] } // Отримання зв'язків продукта
        );
        if (!product) {
            // Умова що виконується якщо вибраного продукту немає
            throw new Error(`Product not found ${req.params.id}`); // Відправлення повідомлення
        }

        const productKeys: Array<keyof Omit<Product, "id">> = [
            //Визначення ключей продукту
            "category",
            "description",
            "details",
            "is_visible",
            "name",
            "price",
        ];

        const productsSizes = await sizeRepository.find({
            // Пошук розмірів
            where: body.product_size.map((size) => {
                return { id: size };
            }),
        });

        for (const key of productKeys) {
            // Цикл для ключей продукту
            //@ts-ignore
            product[key] = body[key]; // Визначення що ключ продукту дорівнює ключу body
        }

        product.product_size = productsSizes;

        if (req.file) {
            // Умова якщо з вебсайту відправляється файл
            product.image = await exportFile(req.file); // При виконані умови картинка товару переписується
        }

        await productRepository.save(product); // Зберігання продукту

        return res.json({ ok: true, message: "Update is done" }); // При успішному виконані відправляється повідомлення
    } catch (error) {
        console.log(error);
        return res.json({ ok: false, error });
    }
});
// DELETE ========================
productRouter.delete("/:id", async (req, res) => {
    // DELETE запит для видалення вибраного товару
    try {
        const productRepository = req.db.getRepository(Product);
        await productRepository.delete({ id: req.params.id }); // Функція що видаляє продукт який відповідає id вибраного продукту
        return res.json({ ok: true, message: "Delete is done" }); // Повернення повідомлення про успішне виконання видалення
    } catch (error) {
        console.log(error);
        return res.json({ ok: true, error });
    }
});
