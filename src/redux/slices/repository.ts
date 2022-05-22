import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiGet} from "@configs/api";
import {InitialState, ResponseApi} from "@interface/root";
import {IRepository} from "@interface/repository";
import {AppState} from "@redux/store";

export const getRepositories = createAsyncThunk("repository/getRepositories", async (username?: string) => {
    if(username) {
        const response = await apiGet({url: `https://api.github.com/users/${username}/repos`}) as ResponseApi<IRepository[]>
        return response.data
    } else {
        return []
    }
})

interface IStateRepository extends InitialState {
    repositories?: IRepository[],
}

const initialState: IStateRepository = {}

export const RepositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRepositories.pending, (state, {payload}) => {
            state.repositories = payload
            state.is_loading = true
            state.is_error = false
        })
        builder.addCase(getRepositories.fulfilled, (state, {payload}) => {
            state.repositories = payload
            state.is_loading = false
            if (payload && payload?.length > 0) {
                state.msg = "Berhasil mendapatkan data repository."
                state.is_error = false
            } else {
                state.msg = "Repository tidak ditemukan."
                state.is_error = true
            }
        })
        builder.addCase(getRepositories.rejected, (state, action: any) => {
            state.is_loading = false
            state.is_error = true
            state.repositories = undefined

            if (action.payload) {
                state.msg = action.payload.message as string
            } else {
                state.msg = action.error.message as string
            }
        })
    }
})

export const selectRepositories = ((state: AppState) => state.repository)
export default RepositorySlice.reducer