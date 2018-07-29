/**
 * Represents a configuration file.
 *
 * @class Config
 */
declare class Config {
    private path;
    data: any;
    /**
     * Creates an instance of Config.
     *
     * @param {string} path
     * @memberof Config
     */
    constructor(path: string);
    /**
     * Loads the config.
     *
     * @memberof Config
     */
    load(): void;
    /**
     * Saves the config.
     *
     * @memberof Config
     */
    save(): void;
}
export default Config;
