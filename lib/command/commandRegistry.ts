import Bot from "../bot/bot";
import Command from "./command";
import CommandData from "./commandData";

class CommandRegistry {

    private commands: Command[] = [];

    /**
     * Creates an instance of CommandRegistry.
     *
     * @param {Bot} bot
     * @memberof CommandRegistry
     */
    public constructor(private bot: Bot) {}

    /**
     * Registers a command.
     *
     * @param {Command} command
     * @memberof CommandRegistry
     */
    public register(command: Command) {
        this.commands.push(command);
    }

    /**
     * Executes the command associated with the
     * given command data.
     *
     * @param {CommandData} commandData
     * @memberof CommandRegistry
     */
    public execute(commandData: CommandData) {
        this.commands.forEach((command: Command) => {
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
    public parseCommandData(commandString: string, userName: string, userId: string = "") {
        const commandParts = commandString.substring(1).split(" ");
        return new CommandData(
            commandParts[0].toLowerCase(),
            commandParts.slice(1),
            userName,
            userId,
        );
    }

    /**
     * Returns whether or not the given string
     * should be handled as a command.
     *
     * @param {string} potentialCommandString
     * @returns {boolean}
     * @memberof CommandRegistry
     */
    public isCommandString(potentialCommandString: string): boolean {
        return potentialCommandString.startsWith("!");
    }
}

export default CommandRegistry;
