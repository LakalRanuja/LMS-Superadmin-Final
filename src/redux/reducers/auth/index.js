import {loginActionType} from "../../actionType/actionType";

const initialState = {
    loginSuccess: null,
    loginLoading: false,
    loginFailed: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginActionType.SUCCESS_ACTION:
            return {
                ...state,
                loginSuccess: null,
                loginLoading: false,
                loginFailed: action.value
            };

        case loginActionType.FAILED_ACTION:
            return {
                ...state,
                loginFailed: action.value,
                loginLoading: false,
                loginSuccess: null
            };

        case loginActionType.REQUEST_ACTION:
            return {
                ...state,
                loginLoading: true,
                loginFailed: null,
                loginSuccess: null
            };

        default:
            return state
    }
};

export default authReducer
