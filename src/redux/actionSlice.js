import { actions } from "./constants"

const { createSlice } = require("@reduxjs/toolkit")


const initialActionsState = {
action: actions.unselected
}

const actionSlice = createSlice({
    name: 'actions',
    initialState: initialActionsState,
    reducers: {
        setAction(state, action){
            state.action = action.payload
        }
    }
})


export const {setAction} = actionSlice.actions
export const actionReducer = actionSlice.reducer