export interface Config {
  development: ConfigValues;
  production: ConfigValues;
}

export interface ConfigValues {
  serverEndpoint: string;
  tmdbImageEndpoint: string;
  tmdbImageEndpoint780?: string;
  tmdbImageEndpoint1280?: string;
}
