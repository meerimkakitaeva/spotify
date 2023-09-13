import {IArtist} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchArtists} from "./artistsThunk";

interface ArtistsState {
    artists: IArtist[];
    fetchLoading: boolean;
}

const initialState: ArtistsState = {
    artists: [],
    fetchLoading: false,
}

export const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArtists.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchArtists.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.artists = action.payload;
        });
        builder.addCase(fetchArtists.rejected, (state) => {
            state.fetchLoading = true;
        });

    }
});

export const artistsReducer = artistsSlice.reducer;
export const selectArtists = (state: RootState) => state.artists.artists;
export const selectArtistsLoading = (state: RootState) => state.artists.fetchLoading;