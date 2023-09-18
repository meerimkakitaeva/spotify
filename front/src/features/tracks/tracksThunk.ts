import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITrack, ITrackHistory, ITrackWithId} from "../../types";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/store";

export const fetchTracks = createAsyncThunk<ITrack[], string>(
    'tracks/fetchTracks',
    async (id) => {
        try {
            const response = await axiosApi.get<ITrack[]>('/tracks?album=' + id);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const addTrackHistory = createAsyncThunk<ITrackHistory, ITrackWithId, {state: RootState}>(
    'tracks/addTrackHistory',
    async (track, thunkAPI) => {
        const usersState = thunkAPI.getState().users;
        const token = usersState.user?.token;
        try {
            const response = await axiosApi.post<ITrackHistory>('/track_history', track, {
                headers: {'Authorization': token}
            });
            return response.data;
        } catch (e) {
            throw e;
        }
    }
);