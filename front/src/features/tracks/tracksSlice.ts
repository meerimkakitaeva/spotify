import {ITrack, ITrackHistory} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {addTrackHistory, fetchTracks} from "./tracksThunk";

interface TracksState {
    tracks: ITrack[];
    fetchLoading: boolean;
    historyTrack: ITrackHistory | null,
    addToHistoryLoading: boolean | string,
}

const initialState: TracksState = {
    tracks: [],
    fetchLoading: false,
    historyTrack: null,
    addToHistoryLoading: false,
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


        builder.addCase(addTrackHistory.pending, (state) => {
            state.addToHistoryLoading = true;
        });
        builder.addCase(addTrackHistory.fulfilled, (state, action) => {
            state.addToHistoryLoading = false;
            state.historyTrack = action.payload;
        });
        builder.addCase(addTrackHistory.rejected, (state) => {
            state.addToHistoryLoading = true;
        });
    }
});

export const tracksReducer = tracksSlice.reducer;
export const selectTracks = (state: RootState) => state.tracks.tracks;
export const selectTracksLoading = (state: RootState) => state.tracks.fetchLoading;
export const selectToHistoryLoading = (state: RootState) => state.tracks.addToHistoryLoading;
export const selectHistoryTrack = (state: RootState) => state.tracks.historyTrack;