export const authReducer = (state = {
    userInfo: null,
    loading: false,
    error: null
}, action) => {
        switch(action.type){
            case "REGISTER_START":
                return {...state, loading: true, error: null, success: null};
            case "REGISTER_SUCCESS":
                return {...state, userInfo: action.payload, loading: false, error: null, success: true};
            case "REGISTER_FAIL":
                return {...state, loading: false, error: action.payload, success: null};
            case "LOGIN_START":
                return {...state, loading: true, error: null, success: null};
            case "LOGIN_SUCCESS":
                return {...state, userInfo: action.payload, loading: false, error: null, success: true};
            case "LOGIN_FAIL":
                return {...state, loading: false, error: action.payload, success: null};
            case "LOGOUT_SUCCESS":
                return {...state, userInfo: null, loading: false, error: null, success: true}
            default:
                return state;
        }
}

