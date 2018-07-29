import Bot from "../bot/bot";
import Command from "./command";
import CommandData from "./commandData";
declare class CommandRegistry {
    private bot;
    private commands;
    /**
     * Creates an instance of CommandRegistry.
     *
     * @param {Bot} bot
     * @memberof CommandRegistry
     */
    constructor(bot: Bot);
    /**
     * Registers a command.
     *
     * @param {Command} command
     * @memberof CommandRegistry
     */
    register(command: Command): void;
    /**
     * Executes the command associated with the
     * given command data.
     *
     * @param {CommandData} commandData
     * @memberof CommandRegistry
     */
    execute(commandData: CommandData): void;
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
    parseCommandData(commandString: string, userName: string, userId?: string): CommandData;
    /**
     * Returns whether or not the given string
     * should be handled as a command.
     *
     * @param {string} potentialCommandString
     * @returns {boolean}
     * @memberof CommandRegistry
     */
    isCommandString(potentialCommandString: string): boolean;
}
export default CommandRegistry;
