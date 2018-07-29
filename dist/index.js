"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("./lib/bot/bot"));
const command_1 = __importDefault(require("./lib/command/command"));
const commandData_1 = __importDefault(require("./lib/command/commandData"));
const commandRegistry_1 = __importDefault(require("./lib/command/commandRegistry"));
const config_1 = __importDefault(require("./lib/config/config"));
exports.default = {
    Bot: bot_1.default,
    Command: command_1.default,
    CommandData: commandData_1.default,
    CommandRegistry: commandRegistry_1.default,
    Config: config_1.default,
};
