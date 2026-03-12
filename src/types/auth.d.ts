export type AuthFormState = {
    status?: string,
    errors: {
        email?: string[],
        password?: string[],
        username?: string[],
        confirmPassword?: string[],
        _form?: string[],
    }
}