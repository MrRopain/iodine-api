"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("./lib/bot/bot"));
exports.Bot = bot_1.default;
const command_1 = __importDefault(require("./lib/command/command"));
exports.Command = command_1.default;
const commandData_1 = __importDefault(require("./lib/command/commandData"));
exports.CommandData = commandData_1.default;
const commandRegistry_1 = __importDefault(require("./lib/command/commandRegistry"));
exports.CommandRegistry = commandRegistry_1.default;
const config_1 = __importDefault(require("./lib/config/config"));
exports.Config = config_1.default;
