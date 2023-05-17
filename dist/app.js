"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
//import express from "express-handlebars";
class Application {
    constructor() {
        this.app = (0, express_1.default)();
    }
    settings() {
        this.app.set(`port`, 3000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)("dev"));
        this.settings();
        this.middlewares();
        this.routers();
    }
    routers() { }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get('port'));
        });
    }
}
exports.default = Application;
