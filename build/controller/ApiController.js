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
exports.ApiController = void 0;
const ApiBusiness_1 = require("../business/ApiBusiness");
class ApiController {
    createPizza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    name: req.body.name,
                    price: req.body.price,
                    ingredients: req.body.ingredients
                };
                const apiBusiness = new ApiBusiness_1.ApiBusiness();
                const result = yield apiBusiness.createPizza(input);
                res.status(200).send({ message: "Novo sabor de pizza adicionado!", result, input });
            }
            catch (err) {
                if (err instanceof Error)
                    return res.status(400).send(err.message);
            }
        });
    }
    getMenu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const apiBusiness = new ApiBusiness_1.ApiBusiness();
                const result = yield apiBusiness.getMenu();
                res.status(200).send(result);
            }
            catch (err) {
                if (err instanceof Error)
                    return res.status(400).send(err.message);
            }
        });
    }
    getOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const apiBusiness = new ApiBusiness_1.ApiBusiness();
                const result = yield apiBusiness.getOrders();
                res.status(200).send(result);
            }
            catch (err) {
                if (err instanceof Error)
                    return res.status(400).send(err.message);
            }
        });
    }
    getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = { id: req.params.id };
                const order = yield new ApiBusiness_1.ApiBusiness().getOrderById(input);
            }
            catch (err) {
                if (err instanceof Error)
                    return res.status(400).send(err.message);
            }
        });
    }
}
exports.ApiController = ApiController;
//# sourceMappingURL=ApiController.js.map