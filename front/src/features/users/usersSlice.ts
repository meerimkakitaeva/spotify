import {IUser, ValidationError} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {register} from "./usersThunk";

interface UserState {
    user: IUser | null,
    registerLoading: boolean,
    registerError: ValidationError | null,
}

const initialState: UserState = {
    user: null,
    registerLoading: false,
    registerError: null,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.registerLoading = true;
            state.registerError = null;
        });

        builder.addCase(register.fulfilled, (state, {payload: userResponse}) => {
            state.registerLoading = false;
            state.user = userResponse.user;
        });

        builder.addCase(register.rejected, (state, {payload: error}) => {
            state.registerLoading = false;
            state.registerError = error || null;
        });
    },
});

export const usersReducer = usersSlice.reducer;
export const selectUser = (state: RootState) => state.users.user;
export const selectRegisterLoading = (state: RootState) => state.users.registerLoading;
export const selectRegisterError = (state: RootState) => state.users.registerError;