"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const apiRouter_1 = require("./routes/apiRouter");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", apiRouter_1.apiRouter);
const PORT = process.env.PORT || 3003;
app.listen(process.env.PORT || 3003, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
//# sourceMappingURL=index.js.map