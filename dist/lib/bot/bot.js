"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandRegistry_1 = __importDefault(require("../command/commandRegistry"));
const config_1 = __importDefault(require("../config/config"));
class Bot {
    constructor(configPath) {
        this.config = new config_1.default(configPath);
        this.commandRegistry = new commandRegistry_1.default(this);
    }
    getConfig() {
        return this.config;
    }
    getConfigData() {
        return this.config.data;
    }
    getCommandRegistry() {
        return this.commandRegistry;
    }
}
exports.default = Bot;
