import {createStore, applyMiddleware} from "redux"
import CountReducer from "./reducers/CountReducer";
import thunk from "redux-thunk";
export default createStore(CountReducer, applyMiddleware(thunk))