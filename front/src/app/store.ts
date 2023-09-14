import {configureStore} from "@reduxjs/toolkit";
import {albumsReducer} from "../features/albums/albumsSlice";
import {artistsReducer} from "../features/artists/artistsSlice";
import {tracksReducer} from "../features/tracks/tracksSlice";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    artists: artistsReducer,
    albums: albumsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
