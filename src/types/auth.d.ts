export type AuthFormState = {
    status?: string,
    errors: {
        email?: string[],
        password?: string[],
        username?: string[],
        _form?: string[],
    }
}