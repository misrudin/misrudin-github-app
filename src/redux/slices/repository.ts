import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiGet} from "@configs/api";
import {InitialState, ResponseApi} from "@interface/root";
import {IRepository} from "@interface/repository";
import {AppState} from "@redux/store";
import {stat} from "fs";

interface GetRepos {
    username?: string
    page?: number
}

export const getRepositories = createAsyncThunk("repository/getRepositories", async (params: GetRepos) => {
    if (params.username) {
        const response = await apiGet({url: `https://api.github.com/users/${params.username}/repos?per_page=20&page=${params.page}`}) as ResponseApi<IRepository[]>
        return response.data
    } else {
        return []
    }
})

interface IStateRepository extends InitialState {
    repositories?: IRepository[],
    allowToFetch?: boolean
}

const initialState: IStateRepository = {
    allowToFetch: true,
}

export const RepositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        clearRepositories: (state, action) => {
            state.repositories = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRepositories.pending, (state, action) => {
            state.is_loading = true
            state.is_error = false
            state.allowToFetch = true
        })
        builder.addCase(getRepositories.fulfilled, (state, action: any) => {
            const payload = action.payload
            if (state.repositories && payload) {
                state.repositories = [...state.repositories, ...payload]
            } else {
                state.repositories = payload
            }

            state.is_loading = false
            if (payload && payload?.length > 0) {
                state.msg = "Berhasil mendapatkan data repository."
                state.is_error = false
            } else {
                state.msg = "Repository tidak ditemukan."
                state.allowToFetch = false
            }
        })
        builder.addCase(getRepositories.rejected, (state, action: any) => {
            state.is_loading = false
            state.is_error = true
            state.repositories = undefined
            state.allowToFetch = false

            if (action.payload) {
                state.msg = action.payload.message as string
            } else {
                state.msg = action.error.message as string
            }
        })
    }
})

export const {clearRepositories} = RepositorySlice.actions
export const selectRepositories = ((state: AppState) => state.repository)
export default RepositorySlice.reducer