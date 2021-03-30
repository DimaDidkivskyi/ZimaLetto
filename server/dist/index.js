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
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Product_1 = __importDefault(require("./entity/Product"));
const product_1 = require("./routes/product");
const Category_1 = __importDefault(require("./entity/Category"));
const category_1 = require("./routes/category");
const SizeOptions_1 = __importDefault(require("./entity/SizeOptions"));
const size_1 = require("./routes/size");
const User_1 = __importDefault(require("./entity/User"));
const user_1 = require("./routes/user");
const port = process.env.PORT || 3000;
openConnection().then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((req, _res, next) => {
        req.db = connection;
        return next();
    });
    app.use("/product", product_1.productRouter);
    app.use("/category", category_1.categoryRouter);
    app.use("/size", size_1.sizeRouter);
    app.use("/user", user_1.userRouter);
    app.listen(port, () => {
        console.log("hello");
    });
}));
function openConnection() {
    return typeorm_1.createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "k88nj88oNeR",
        database: "ZimaLetto",
        synchronize: true,
        entities: [Product_1.default, Category_1.default, SizeOptions_1.default, User_1.default],
    });
}
//# sourceMappingURL=index.js.map