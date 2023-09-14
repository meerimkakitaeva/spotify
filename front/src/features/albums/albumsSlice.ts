import {IAlbum} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchAlbums} from "./albumsThunk";
import {RootState} from "../../app/store";

interface AlbumsState {
    albums: IAlbum[];
    fetchLoading: boolean;
}

const initialState: AlbumsState = {
    albums: [],
    fetchLoading: false,
}

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.fetchLoading = false;
            state.albums = action.payload;
        });
        builder.addCase(fetchAlbums.rejected, (state) => {
            state.fetchLoading = true;
        });

    }
});

export const albumsReducer = albumsSlice.reducer;
export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectAlbumsLoading = (state: RootState) => state.albums.fetchLoading;