import * as actionTypes from "./user-types";

export const authorizeUser = (user, password) => {
    return {
        type: actionTypes.AUTH,
        payload: {
            user,
            password
        }
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}
