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
exports.connect = void 0;
const mongodb_1 = require("mongodb");
const mongodb_2 = require("mongodb");
const uri = "mongodb+srv://JhonG:1522094@cluster0.crfdlcj.mongodb.net/?retryWrites=true&w=majority";
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_2.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            yield client.connect();
            // Send a ping to confirm a successful connection
            console.log(">>>> Database Connected");
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield client.close();
        }
    });
}
exports.connect = connect;
exports.default = connect;
