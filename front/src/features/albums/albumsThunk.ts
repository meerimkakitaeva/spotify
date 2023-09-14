import {createAsyncThunk} from "@reduxjs/toolkit";
import {IAlbum} from "../../types";
import axiosApi from "../../axiosApi";

export const fetchAlbums = createAsyncThunk<IAlbum[], string>(
    'albums/fetchAlbums',
    async (id) => {
        try {
            const response = await axiosApi.get<IAlbum[]>('/albums?artist=' + id);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);