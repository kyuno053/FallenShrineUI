export interface User {
    userId: string,
    userName: string,
    nat5def: Def[],
    nat4def: Def[],
    lock: Lock
}

export interface Def {
    first: string,
    second: string,
    third: string,
    isStrong: boolean
}

export interface Lock {
    nat5: boolean,
    nat4: boolean
}
