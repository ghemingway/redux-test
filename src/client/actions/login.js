/**
 * Created by ghemingway on 4/4/17.
 */


export const loginRequest = (username, password, ret) => {
    return {
        type: 'LOGIN:REQUEST',
        username: username.toLowerCase().trim(),
        password: password,
        return: ret
    }
};

export const loginSuccess = (user) => {
    return {
        type: 'LOGIN:SUCCESS',
        user: user
    }
};

export const loginError = (err) => {
    return {
        type: 'LOGIN:ERROR',
        error: err
    }
};