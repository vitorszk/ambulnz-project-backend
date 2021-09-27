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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBusiness = void 0;
const ApiDatabase_1 = require("../data/ApiDatabase");
const generateId_1 = require("../services/generateId");
class ApiBusiness {
    createPizza(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.name ||
                !input.price ||
                !input.ingredients) {
                throw new Error("Alguma informação está faltando!");
            }
            const generateId = new generateId_1.GenerateId();
            const id = generateId.generate();
            const newPizza = Object.assign({ id }, input);
            const apiDatabase = new ApiDatabase_1.ApiDatabase();
            yield apiDatabase.createPizza(newPizza);
        });
    }
    getMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiDatabase = new ApiDatabase_1.ApiDatabase();
            const menu = yield apiDatabase.getMenu();
            return menu;
        });
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const apiDatabase = new ApiDatabase_1.ApiDatabase();
            const orders = yield apiDatabase.getOrders();
            return orders;
        });
    }
    getOrderById(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield new ApiDatabase_1.ApiDatabase().getOrderById(input.id);
                if (!order) {
                    throw new Error("Order not found!");
                }
                return order;
            }
            catch (error) {
                let errorMessage = "Error getting order by it's Id";
                if (error instanceof Error) {
                    errorMessage = error.message;
                }
            }
        });
    }
}
exports.ApiBusiness = ApiBusiness;
//# sourceMappingURL=ApiBusiness.js.map