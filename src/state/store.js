import {createStore} from "redux"
import reducers from "./reducers/index"

// empty object is the initial state

export const store = createStore(
    reducers,
    {}
)
