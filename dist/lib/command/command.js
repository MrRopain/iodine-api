"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A basic set of properties and functions for
 * commands to extend from.
 *
 * @abstract
 * @class Command
 */
class Command {
    /**
     * Creates an instance of Command.
     *
     * @param {string} name
     * @memberof Command
     */
    constructor(name) {
        this.name = name.toLowerCase();
    }
    /**
     * Returns the name of the command.
     *
     * @returns {string}
     * @memberof Command
     */
    getName() {
        return this.name;
    }
}
exports.default = Command;
