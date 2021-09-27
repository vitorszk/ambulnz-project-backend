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
exports.ApiDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ApiDatabase extends BaseDatabase_1.BaseDatabase {
    createPizza(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection()
                .insert(input)
                .into(ApiDatabase.PIZZA_TABLE_NAME);
        });
    }
    getMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getConnection()
                .select('*')
                .from(ApiDatabase.PIZZA_TABLE_NAME);
        });
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getConnection()
                .select('*')
                .from(ApiDatabase.ORDERS_TABLE_NAME);
        });
    }
    getOrderById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select('*')
                    .from(ApiDatabase.ORDER_ITEMS_TABLE_NAME)
                    .where({ id });
                return (result[0]);
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
exports.ApiDatabase = ApiDatabase;
ApiDatabase.PIZZA_TABLE_NAME = "pizza_ambulnz";
ApiDatabase.ORDERS_TABLE_NAME = "order_ambulnz";
ApiDatabase.ORDER_ITEMS_TABLE_NAME = "order_item_ambulnz";
//# sourceMappingURL=ApiDatabase.js.map