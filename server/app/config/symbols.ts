export interface BingeSymbols {
    Connection: symbol;
    MovieRoutes: symbol;
    MovieControllers: symbol;
    MoviesSchema: symbol;
    MovieServices: symbol
    
    Config: symbol;
    Bootstrap: symbol;
    Schemas: symbol;
}

export const Symbols: BingeSymbols = {
    Connection: Symbol('Connection'),
    MovieRoutes: Symbol('MovieRoutes'),
    MovieControllers: Symbol('MovieControllers'),
    MoviesSchema: Symbol('MoviesSchema'),
    MovieServices: Symbol('MovieServices'),
    
    Config: Symbol('Config'),
    Bootstrap: Symbol('Bootstrap'),
    Schemas: Symbol('Schemas')
};