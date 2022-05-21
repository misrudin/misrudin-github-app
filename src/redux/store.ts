import {configureStore, ThunkAction} from "@reduxjs/toolkit";
import {profileReducer} from "./slices";
import {Action} from 'redux';
import {createWrapper} from "next-redux-wrapper";

const makeStore = () => configureStore({
    reducer: {
        profile: profileReducer
    },
    devTools: true
})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)