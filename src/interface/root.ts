export interface ResponseApi<Type> {
    data?: Type
}

export interface InitialState {
    status?: string,
    code?: number,
    msg?: string
}