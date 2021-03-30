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
exports.sizeRouter = void 0;
const express_1 = require("express");
const SizeOptions_1 = __importDefault(require("../entity/SizeOptions"));
exports.sizeRouter = express_1.Router();
exports.sizeRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.db);
    console.log(SizeOptions_1.default);
    const productRepository = req.db.getRepository(SizeOptions_1.default);
    const productList = yield productRepository.find({});
    res.json(productList);
}));
//# sourceMappingURL=size.js.map