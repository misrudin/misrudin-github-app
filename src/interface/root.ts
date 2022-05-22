export interface ResponseApi<Type> {
    data?: Type
}

export interface InitialState {
    is_loading?: boolean,
    is_error?: boolean,
    code?: number,
    msg?: string
}