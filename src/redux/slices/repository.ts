import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {apiGet} from "@configs/api";
import {InitialState, ResponseApi} from "@interface/root";
import {IRepository} from "@interface/repository";
import {HYDRATE} from "next-redux-wrapper";
import {AppState} from "@redux/store";

export const getRepositories = createAsyncThunk("repository/getRepositories", async () => {
    const response = await apiGet({url: `https://api.github.com/users/misrudin/repos`}) as ResponseApi<IRepository[]>
    return response.data
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
        builder.addCase(HYDRATE, (state, action: any) => {
            state.repositories = action.payload
        })
        builder.addCase(getRepositories.fulfilled, (state, {payload}) => {
            state.repositories = payload
        })
        builder.addCase(getRepositories.rejected, (state, action: any) => {
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