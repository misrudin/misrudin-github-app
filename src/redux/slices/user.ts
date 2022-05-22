import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
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
        builder.addCase(getProfile.pending, (state, action) => {
            state.is_loading = true
            state.is_error = false
        })
        builder.addCase(getProfile.fulfilled, (state, {payload}) => {
            state.profile = payload
            state.is_loading = false
            if (payload && payload.login) {
                state.msg = "Berhasil mendapatkan data profile."
                state.is_error = false
            } else {
                state.msg = "Profile tidak ditemukan."
                state.is_error = true
            }
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

export const selectUser = ((state: AppState) => state.user)
export default UserSlice.reducer