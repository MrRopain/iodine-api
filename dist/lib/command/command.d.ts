import Bot from "../bot/bot";
import CommandData from "./commandData";
/**
 * A basic set of properties and functions for
 * commands to extend from.
 *
 * @abstract
 * @class Command
 */
declare abstract class Command {
    private name;
    /**
     * Creates an instance of Command.
     *
     * @param {string} name
     * @memberof Command
     */
    protected constructor(name: string);
    /**
     * Executes the command with the given
     * command data.
     *
     * @abstract
     * @param {Bot} bot
     * @param {CommandData} data
     * @memberof Command
     */
    abstract execute(bot: Bot, data: CommandData): void;
    /**
     * Returns the name of the command.
     *
     * @returns {string}
     * @memberof Command
     */
    getName(): string;
}
export default Command;
