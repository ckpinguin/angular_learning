/**
 * In Typescript, interfaces are only used for type-safety
 */
export interface BlogEntry {
    id?: string;
    title?: string;
    text?: string;
    image?: string;
    date?: string;
    // user id
    user?: string;
    // author name (should be settable by the logged in user)
    author?: string;
    tags?: Tag[];
}

export interface Tag {
    label?: string;
}
