"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const ApiController_1 = require("../controller/ApiController");
exports.apiRouter = express_1.default.Router();
const apiController = new ApiController_1.ApiController();
exports.apiRouter.get("/pizzas", apiController.getMenu);
exports.apiRouter.get("/orders", apiController.getOrders);
exports.apiRouter.get("/orders/:id", apiController.getOrderById);
exports.apiRouter.post("/new-pizza", apiController.createPizza);
//# sourceMappingURL=apiRouter.js.map