import * as AuthApi from '../api/AuthRequest'

export const logIn = (formData) => async(dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
        const {data} = await AuthApi.logIn(formData)
        dispatch({type: "LOGIN_SUCCESS", payload: data})

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log(error)
        dispatch({type: "LOGIN_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
    
}

export const signUp = (formData) => async(dispatch) => {
    dispatch({type: "REGISTER_START"})
    try {
        const {data} = await AuthApi.signUp(formData)
        dispatch({type: "REGISTER_SUCCESS", payload: data})

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log(error)
        dispatch({type: "REGISTER_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
    
}

export const logout = () => async(dispatch) => {
    dispatch({type: "LOGOUT_SUCCESS"})
    localStorage.clear();
}

