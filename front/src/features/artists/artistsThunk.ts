import {createAsyncThunk} from "@reduxjs/toolkit";
import {IArtist} from "../../types";
import axiosApi from "../../axiosApi";

export const fetchArtists = createAsyncThunk<IArtist[]>(
    'artists/fetchAll',
    async () => {
        const response = await axiosApi.get<IArtist[]>('/artists');
        return response.data;
    }
);