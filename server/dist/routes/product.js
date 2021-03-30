"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const Product_1 = __importDefault(require("../entity/Product"));
exports.productRouter = express_1.Router();
exports.productRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(Product_1.default);
        const productRepository = req.db.getRepository(Product_1.default);
        const productList = yield productRepository.find({
            relations: ["category"],
        });
        res.json(productList);
    }
    catch (_a) {
        res.send("Get error");
    }
}));
exports.productRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productRepository = req.db.getRepository(Product_1.default);
        const productList = yield productRepository.findOne({
            id: req.params.id,
        });
        res.json(productList);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
}));
exports.productRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const productRepository = req.db.getRepository(Product_1.default);
        const product = productRepository.create(req.body);
        yield productRepository.save(product);
        res.send("Post done");
    }
    catch (_b) {
        res.send("Post error");
    }
}));
exports.productRouter.post("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productRepository = req.db.getRepository(Product_1.default);
        yield productRepository.update({ id: req.params.id }, req.body);
        res.send("Post update is done");
    }
    catch (_c) {
        res.send("Post update error");
    }
}));
exports.productRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productRepository = req.db.getRepository(Product_1.default);
        yield productRepository.delete({ id: req.params.id });
        res.send("Delete is done");
    }
    catch (_d) {
        res.send("Delete error");
    }
}));
//# sourceMappingURL=product.js.map