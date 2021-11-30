import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers/index"
import thunk from "redux-thunk"
// empty object is the initial state

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)
