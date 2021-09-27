"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, items) {
        this.id = id;
        this.items = items;
    }
    getId() {
        return this.id;
    }
    getItems() {
        return this.items;
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map