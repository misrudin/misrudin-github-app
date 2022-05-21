import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "@redux/store";

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: null
    },
    reducers: {
        setProfileData: (state, action) => {
            state.name = action.payload
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.name = action.payload.profile.name
        }
    }
})

export const {setProfileData} = ProfileSlice.actions
export const selectProfile = ((state: AppState) => state.profile)
export default ProfileSlice.reducer