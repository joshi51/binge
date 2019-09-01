export interface BingeSymbols {
    ArticleRoutes: symbol;
    Config: symbol;
    Bootstrap: symbol;
}

export const Symbols: BingeSymbols = {
    ArticleRoutes: Symbol('ArticleRoutes'),
    Config: Symbol('Config'),
    Bootstrap: Symbol('Bootstrap'),
};