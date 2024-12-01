import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import basketReducer from "./redux/basket/basketSlice"
import { teamSlice } from "./redux/team/teamSlice"
import { sneakSlice } from "./redux/sneak/sneakSlice"

export const store = configureStore({
  reducer: {
    sneak: sneakSlice.reducer,
    team: teamSlice.reducer,
    basket: basketReducer,
  },
})  


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
