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
    public constructor(
        private commandName: string,
        private commandArgs: string[],
        private userName: string,
        private userId: string,
    ) {}

    /**
     * Returns the name of the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    public getCommandName(): string {
        return this.commandName;
    }

    /**
     * Returns the arguments for the command.
     *
     * @returns {string[]}
     * @memberof CommandData
     */
    public getCommandArgs(): string[] {
        return this.commandArgs;
    }

    /**
     * Returns the name of the user wanting to
     * execute the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    public getUserName(): string {
        return this.userName;
    }

    /**
     * Returns the id of the user wanting to
     * execute the command.
     *
     * @returns {string}
     * @memberof CommandData
     */
    public getUserId(): string {
        return this.userId;
    }
}

export default CommandData;
