import {ITrack} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchTracks} from "./tracksThunk";

interface TracksState {
    tracks: ITrack[];
    fetchLoading: boolean;
}

const initialState: TracksState = {
    tracks: [],
    fetchLoading: false,
}

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTracks.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchTracks.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.tracks = action.payload;
        });
        builder.addCase(fetchTracks.rejected, (state) => {
            state.fetchLoading = true;
        });

    }
});

export const tracksReducer = tracksSlice.reducer;
export const selectTracks = (state: RootState) => state.tracks.tracks;
export const selectTracksLoading = (state: RootState) => state.tracks.fetchLoading;