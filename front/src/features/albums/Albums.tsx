import React, {useEffect} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import CircularProgress from '@mui/material/CircularProgress';
import {selectAlbums, selectAlbumsLoading, selectArtistName} from "./albumsSlice";
import AlbumItem from "./components/AlbumItem";
import {fetchAlbums} from "./albumsThunk";
import {useParams} from "react-router";

const Albums = () => {
    const { artistId } = useParams() as { artistId: string };

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectAlbums);
    const fetchLoading = useAppSelector(selectAlbumsLoading);
    const artistName = useAppSelector(selectArtistName);

    let albums: React.ReactNode = <CircularProgress />;

    if (!fetchLoading) {
        const newAlbums = [...items];
        albums = newAlbums.map((item) => (
            <AlbumItem
                _id={item._id}
                key={item._id}
                name={item.name}
                releaseDate={item.releaseDate}
                image={item.image}
            />
        ));
    }

    useEffect(() => {
        dispatch(fetchAlbums(artistId));
    }, [dispatch, artistId]);

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{mb:3, mt: 2}} textAlign="center">
                        Artist : {artistName}
                    </Typography>
                    <div style={{display: "flex",flexWrap: "wrap", flexDirection: "row", justifyContent: "center"}}>
                        {albums}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Albums;