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
exports.categoryRouter = void 0;
const express_1 = require("express");
const Category_js_1 = __importDefault(require("../entity/Category.js"));
const product_js_1 = require("./product.js");
exports.categoryRouter = express_1.Router();
exports.categoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryRepository = req.db.getRepository(Category_js_1.default);
        const categoryList = yield categoryRepository.find({
            relations: ["products"],
        });
        res.json(categoryList);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
}));
exports.categoryRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryRepository = req.db.getRepository(Category_js_1.default);
        const categoryList = yield categoryRepository.findOne({ id: req.params.id }, { relations: ["products"] });
        res.json(categoryList);
    }
    catch (_a) {
        res.send("Get one error");
    }
}));
exports.categoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryRepository = req.db.getRepository(Category_js_1.default);
        const category = categoryRepository.create(req.body);
        yield categoryRepository.save(category);
        res.send("Post is done");
    }
    catch (_b) {
        res.send("Post error");
    }
}));
exports.categoryRouter.post("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryRepository = req.db.getRepository(Category_js_1.default);
        yield categoryRepository.update({ id: req.params.id }, req.body);
        res.send("Post update is done");
    }
    catch (_c) {
        res.send("Post update error");
    }
}));
product_js_1.productRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryRepository = req.db.getRepository(Category_js_1.default);
        yield categoryRepository.delete({ id: req.params.id });
        res.send("Delete is done");
    }
    catch (_d) {
        res.send("Delete error");
    }
}));
//# sourceMappingURL=category.js.map