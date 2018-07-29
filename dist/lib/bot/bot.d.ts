import CommandRegistry from "../command/commandRegistry";
import Config from "../config/config";
declare abstract class Bot {
    protected config: Config;
    protected commandRegistry: CommandRegistry;
    protected constructor(configPath: string);
    getConfig(): Config;
    getConfigData(): any;
    getCommandRegistry(): CommandRegistry;
}
export default Bot;
