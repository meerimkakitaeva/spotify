import {IAlbum} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchAlbums} from "./albumsThunk";
import {RootState} from "../../app/store";

interface AlbumsState {
    albums: IAlbum[];
    fetchLoading: boolean;
    artistName: string;
}

const initialState: AlbumsState = {
    albums: [],
    fetchLoading: false,
    artistName: '',
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
            state.artistName = action.payload[0].artist.name;
        });
        builder.addCase(fetchAlbums.rejected, (state) => {
            state.fetchLoading = true;
        });

    }
});

export const albumsReducer = albumsSlice.reducer;
export const selectAlbums = (state: RootState) => state.albums.albums;
export const selectAlbumsLoading = (state: RootState) => state.albums.fetchLoading;
export const selectArtistName = (state: RootState) => state.albums.artistName;