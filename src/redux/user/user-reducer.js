import * as actionTypes from "./user-types";

const userInitState = {
    user: "Jo",
    password: "pw123",
    isAuth: false
}

const userReducer = (state = userInitState, action) => {
    switch (action.type) {
        case actionTypes.AUTH:
            const isAuth = state.user === action.payload.user && state.password === action.payload.password;
            return { ...state, isAuth };
        case actionTypes.LOGOUT:
            return { isAuth: false };
        default:
            return state;
    }
}

export default userReducer;
