import CommandRegistry from "../command/commandRegistry";
import Config from "../config/config";

abstract class Bot {

    private config: Config;
    private commandRegistry: CommandRegistry;

    protected constructor(configPath: string) {
        this.config = new Config(configPath);
        this.commandRegistry = new CommandRegistry(this);
    }

    public getConfig(): Config {
        return this.config;
    }

    public getCommandRegistry(): CommandRegistry {
        return this.commandRegistry;
    }
}

export default Bot;
