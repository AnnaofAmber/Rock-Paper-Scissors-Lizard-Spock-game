import { pickedAction } from "./constants"
const { createSlice } = require("@reduxjs/toolkit")


const initialPickedActionsState = {
action: pickedAction.unselected
}

const pickedActionSlice = createSlice({
    name: 'pickedActions',
    initialState: initialPickedActionsState,
    reducers: {
        setPickedAction(state, action){
            state.action = action.payload
        }
    }
})


export const {setPickedAction} = pickedActionSlice.actions
export const pickedActionReducer = pickedActionSlice.reducer