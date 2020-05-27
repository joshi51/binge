export interface Config {
    development: ConfigValues;
    production: ConfigValues;
}

export interface ConfigValues {
    serverEndpoint: string;
    tmdbImageEndpoint: string;
}
