import {createAsyncThunk} from "@reduxjs/toolkit";
import {ITrack} from "../../types";
import axiosApi from "../../axiosApi";

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