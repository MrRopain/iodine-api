"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
/**
 * Represents a configuration file.
 *
 * @class Config
 */
class Config {
    /**
     * Creates an instance of Config.
     *
     * @param {string} path
     * @memberof Config
     */
    constructor(path) {
        this.path = path;
    }
    /**
     * Loads the config.
     *
     * @memberof Config
     */
    load() {
        this.data = JSON.parse(fs_1.default.readFileSync(this.path));
    }
    /**
     * Saves the config.
     *
     * @memberof Config
     */
    save() {
        fs_1.default.writeFileSync(this.path, JSON.stringify(this.data));
    }
}
exports.default = Config;
