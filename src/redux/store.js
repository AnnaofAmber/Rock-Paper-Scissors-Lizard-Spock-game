import { configureStore } from "@reduxjs/toolkit";
import { actionReducer } from "./actionSlice";
import { pickedActionReducer } from "./pickedActionSlice";
import { statusReducer } from "./statusSlice";
import { scoreReduser } from "./scoreSlice";


export const store = configureStore({
    reducer:
    {
      actions: actionReducer, 
      pickedActions: pickedActionReducer,
      status: statusReducer,
      score: scoreReduser
    }
})