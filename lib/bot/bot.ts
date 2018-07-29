import CommandRegistry from "../command/commandRegistry";
import Config from "../config/config";

abstract class Bot {

    protected config: Config;
    protected commandRegistry: CommandRegistry;

    protected constructor(configPath: string) {
        this.config = new Config(configPath);
        this.commandRegistry = new CommandRegistry(this);
    }

    public getConfig(): Config {
        return this.config;
    }

    public getConfigData(): any {
        return this.config.data;
    }

    public getCommandRegistry(): CommandRegistry {
        return this.commandRegistry;
    }
}

export default Bot;
