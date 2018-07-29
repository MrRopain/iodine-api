import fs from "fs";

/**
 * Represents a configuration file.
 *
 * @class Config
 */
class Config {

    public data: any;

    /**
     * Creates an instance of Config.
     *
     * @param {string} path
     * @memberof Config
     */
    public constructor(private path: string) {
        this.load();
    }

    /**
     * Loads the config.
     *
     * @memberof Config
     */
    public load(): void {
        this.data = JSON.parse(fs.readFileSync(this.path) as any);
    }

    /**
     * Saves the config.
     *
     * @memberof Config
     */
    public save(): void {
        fs.writeFileSync(this.path, JSON.stringify(this.data, null, 4));
    }
}

export default Config;
