import {
    legacy_createStore as createStore,
    applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import {reducers} from "../reducers"


const userInfoFromStorage = localStorage.getItem('userInfo')
                            ? JSON.parse(localStorage.getItem('userInfo'))
                            : null



const middleware = [thunk]


const initialState = {
    auth : {userInfo : userInfoFromStorage} 
}
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

//store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;