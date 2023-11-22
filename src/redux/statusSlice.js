import { status } from "./constants"

const { createSlice } = require("@reduxjs/toolkit")


const initialStatusState = {
status: status.unselected
}

const statusSlice = createSlice({
    name: 'status',
    initialState: initialStatusState,
    reducers: {
        setStatus(state, action){
            state.status = action.payload
        }
    }
})


export const {setStatus} = statusSlice.actions
export const statusReducer = statusSlice.reducer