import {configureStore} from "@reduxjs/toolkit";
import {albumsReducer} from "../features/albums/albumsSlice";
import {artistsReducer} from "../features/artists/artistsSlice";

export const store = configureStore({
  reducer: {
    artists: artistsReducer,
    albums: albumsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
