"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandData_1 = __importDefault(require("./commandData"));
class CommandRegistry {
    /**
     * Creates an instance of CommandRegistry.
     *
     * @param {Bot} bot
     * @memberof CommandRegistry
     */
    constructor(bot) {
        this.bot = bot;
        this.commands = [];
    }
    /**
     * Registers a command.
     *
     * @param {Command} command
     * @memberof CommandRegistry
     */
    register(command) {
        this.commands.push(command);
    }
    /**
     * Executes the command associated with the
     * given command data.
     *
     * @param {CommandData} commandData
     * @memberof CommandRegistry
     */
    execute(commandData) {
        this.commands.forEach((command) => {
            if (command.getName() === commandData.getCommandName()) {
                command.execute(this.bot, commandData);
            }
        });
    }
    /**
     * Parses a CommandData object from the given
     * string.
     *
     * @param {string} commandString
     * @param {string} userName
     * @param {string} [userId=""]
     * @returns
     * @memberof CommandRegistry
     */
    parseCommandData(commandString, userName, userId = "") {
        const commandParts = commandString.substring(1).split(" ");
        return new commandData_1.default(commandParts[0].toLowerCase(), commandParts.slice(1), userName, userId);
    }
    /**
     * Returns whether or not the given string
     * should be handled as a command.
     *
     * @param {string} potentialCommandString
     * @returns {boolean}
     * @memberof CommandRegistry
     */
    isCommandString(potentialCommandString) {
        return potentialCommandString.startsWith("!");
    }
}
exports.default = CommandRegistry;
