import * as actionTypes from "./user-types";

const userInitState = {
    user: "Jo",
    password: "pw123",
    isAuth: false
}

const userReducer = (state = userInitState, action) => {
    console.log("action r:", action)
    console.log("state:", state)

    switch (action.type) {
        case actionTypes.AUTH:
            console.log("action a:", action.user)
            if (state.user === action.user && state.password === action.password) {
                return { ...state, isAuth: !state.isAuth };
            }
            else {
                return { ...state, isAuth: state.isAuth };
            }

        case actionTypes.LOGOUT:
            return { ...state, isAuth: false };

        default:
            return state;
    }
}

export default userReducer;
