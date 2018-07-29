import Bot from "../bot/bot";
import CommandData from "./commandData";

/**
 * A basic set of properties and functions for
 * commands to extend from.
 *
 * @abstract
 * @class Command
 */
abstract class Command {

    private name: string;

    /**
     * Creates an instance of Command.
     *
     * @param {string} name
     * @memberof Command
     */
    protected constructor(name: string) {
        this.name = name.toLowerCase();
    }

    /**
     * Executes the command with the given
     * command data.
     *
     * @abstract
     * @param {Bot} bot
     * @param {CommandData} data
     * @memberof Command
     */
    public abstract execute(bot: Bot, data: CommandData): void;

    /**
     * Returns the name of the command.
     *
     * @returns {string}
     * @memberof Command
     */
    public getName(): string {
        return this.name;
    }
}

export default Command;
