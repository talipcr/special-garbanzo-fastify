"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var MONGO_OPTIONS = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
var MONGO_URL = 'mongodb://127.0.0.1:27017/api';
var MONGO = {
    options: MONGO_OPTIONS,
    url: MONGO_URL,
};
// const SERVER_HOSTNAME = 'localhost';
// const SERVER_PORT = '27017';
// const SERVER = {
// 	hostname: SERVER_HOSTNAME,
// 	port: SERVER_PORT,
// };
var FIREBASE_CONFIG = {
    apiKey: 'AIzaSyDTUZdvdI-RIgzOD2N5858mbqbnhuJhgow',
    authDomain: 'special-garbanzo.firebaseapp.com',
    projectId: 'special-garbanzo',
    storageBucket: 'special-garbanzo.appspot.com',
    messagingSenderId: '1013782679291',
    appId: '1:1013782679291:web:04842a4c2f330b5cd6aa5e',
};
var config = {
    mongo: MONGO,
    firebase: FIREBASE_CONFIG,
};
exports.default = config;
