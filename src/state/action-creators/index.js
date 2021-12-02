export const deposit = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"deposit",
            payload: amount
        })
    }
}

export const withdraw = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"withdraw",
            payload: amount
        })
    }
}

export const multiply = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "multiply",
            payload: amount
        })
    }
}