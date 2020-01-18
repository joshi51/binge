export interface BingeSymbols {
    Connection: symbol;
    MovieRoutes: symbol;
    MovieControllers: symbol;
    MoviesSchema: symbol;
    MovieServices: symbol;
    MovieFactory: symbol;
    
    Config: symbol;
    Bootstrap: symbol;
    Schemas: symbol;
    TMDBServices: symbol;
    LoggerServices: symbol;
    LoginServices: symbol;
    LoginRoutes: symbol;
    LoginControllers: symbol;
}

export const Symbols: BingeSymbols = {
    Connection: Symbol('Connection'),
    MovieRoutes: Symbol('MovieRoutes'),
    MovieControllers: Symbol('MovieControllers'),
    MoviesSchema: Symbol('MoviesSchema'),
    MovieServices: Symbol('MovieServices'),
    MovieFactory: Symbol('MovieFactory'),
    
    Config: Symbol('Config'),
    Bootstrap: Symbol('Bootstrap'),
    Schemas: Symbol('Schemas'),
    TMDBServices: Symbol('TMDBServices'),
    LoggerServices: Symbol('LoggerServices'),
    LoginServices: Symbol('LoginServices'),
    LoginRoutes: Symbol('LoginRoutes'),
    LoginControllers: Symbol('LoginControllers')
};
