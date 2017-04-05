/**
 * Created by ghemingway on 4/4/17.
 */


export const profileRequest = (username) => {
    return {
        type: 'PROFILE:REQUEST',
        username: username.toLowerCase().trim()
    }
};

export const profileSuccess = (user) => {
    return {
        type: 'PROFILE:SUCCESS',
        user: user
    }
};

export const profileError = (err) => {
    return {
        type: 'PROFILE:ERROR',
        error: err
    }
};