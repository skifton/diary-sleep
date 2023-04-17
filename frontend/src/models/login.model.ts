export interface IUser {
    userId?: string,
    name: string, 
    email: string,
    bDay: string,
}

export interface ILoginForm {
    email: string,
    password: string,
    isRemember: boolean
};

export interface IRegistrationForm {
    name: string,
    surname: string,
    email: string,
    bDay: string,
    password: string,
    confirmPassword: string,
}

export interface IAuthToken {
    accessToken: string,
    refreshToken: string,
}