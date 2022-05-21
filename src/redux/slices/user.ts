import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "@redux/store";
import {InitialState, ResponseApi} from "@interface/root";
import {IUser} from "@interface/user";
import {apiGet} from "@configs/api";

export const getProfile = createAsyncThunk("user/getProfile", async (username: string) => {
    const response = await apiGet({url: `https://api.github.com/users/${username}`}) as ResponseApi<IUser>
    return response.data
})

interface IStateUser extends InitialState {
    profile?: IUser
}

const initialState: IStateUser = {}

export const UserSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, {payload}) => {
            state.profile = payload
        })
        builder.addCase(getProfile.rejected, (state, action: any) => {
            if (action.payload) {
                state.msg = action.payload.message as string
            } else {
                state.msg = action.error.message as string
            }
        })
    }
})

// export const {setProfileData} = UserSlice.actions
export const selectUser = ((state: AppState) => state.user)
export default UserSlice.reducer