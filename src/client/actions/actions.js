/**
 * Created by ghemingway on 4/4/17.
 */


export const loginRequest = (username, password) => {
    return {
        type: 'LOGIN:REQUEST',
        username: username.toLowerCase().trim(),
        password: password
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