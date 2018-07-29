"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Holds information about the execution of a
 * command.
 *
 * @class CommandData
 */
class CommandData {
    /**
     * Creates an instance of CommandData.
     *
     * @param {string} commandName
     * @param {string[]} commandArgs
     * @param {string} userName
     * @param {string} userId
     * @memberof CommandData
     */
    constructor(commandName, commandArgs, userName, userId) {
        this.commandName = commandName;
        this.commandArgs = commandArgs;
        this.userName = userName;
        this.userId = userId;
    }
    /**
     * Returns the name of the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    getCommandName() {
        return this.commandName;
    }
    /**
     * Returns the arguments for the command.
     *
     * @returns {string[]}
     * @memberof CommandData
     */
    getCommandArgs() {
        return this.commandArgs;
    }
    /**
     * Returns the name of the user wanting to
     * execute the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    getUserName() {
        return this.userName;
    }
    /**
     * Returns the id of the user wanting to
     * execute the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    getUserId() {
        return this.userId;
    }
}
exports.default = CommandData;
