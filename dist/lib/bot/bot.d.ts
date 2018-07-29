import CommandRegistry from "../command/commandRegistry";
import Config from "../config/config";
declare abstract class Bot {
    private config;
    private commandRegistry;
    protected constructor(configPath: string);
    getConfig(): Config;
    getCommandRegistry(): CommandRegistry;
}
export default Bot;
