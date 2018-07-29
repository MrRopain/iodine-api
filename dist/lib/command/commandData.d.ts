/**
 * Holds information about the execution of a
 * command.
 *
 * @class CommandData
 */
declare class CommandData {
    private commandName;
    private commandArgs;
    private userName;
    private userId;
    /**
     * Creates an instance of CommandData.
     *
     * @param {string} commandName
     * @param {string[]} commandArgs
     * @param {string} userName
     * @param {string} userId
     * @memberof CommandData
     */
    constructor(commandName: string, commandArgs: string[], userName: string, userId: string);
    /**
     * Returns the name of the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    getCommandName(): string;
    /**
     * Returns the arguments for the command.
     *
     * @returns {string[]}
     * @memberof CommandData
     */
    getCommandArgs(): string[];
    /**
     * Returns the name of the user wanting to
     * execute the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    getUserName(): string;
    /**
     * Returns the id of the user wanting to
     * execute the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    getUserId(): string;
}
export default CommandData;
