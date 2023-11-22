
const { createSlice } = require("@reduxjs/toolkit")


const initialScoreState = {
score: 0
}

const scoreSlice = createSlice({
    name: 'score',
    initialState: initialScoreState,
    reducers: {
        setScore(state, action){
            state.score = state.score + action.payload
        }
    }
})


export const {setScore} = scoreSlice.actions
export const scoreReduser = scoreSlice.reducer