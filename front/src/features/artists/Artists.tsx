import React, {useEffect} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import CircularProgress from '@mui/material/CircularProgress';
import {selectArtists, selectArtistsLoading} from "./artistsSlice";
import ArtistItem from "./components/ArtistItem";
import {fetchArtists} from "./artistsThunk";

const Artists = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectArtists);
    const fetchLoading = useAppSelector(selectArtistsLoading);

    let artists: React.ReactNode = <CircularProgress />;

    if (!fetchLoading) {
        const newArtists = [...items].reverse();
        artists = newArtists.map((item) => (
            <ArtistItem
                key={item.id}
                _id={item.id}
                name={item.name}
                image={item.image}
            />
        ));
    }

    useEffect(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{mb:3, mt: 2}} textAlign="center">
                        Artists :
                    </Typography>
                    { artists }
                </Grid>
            </Grid>
        </Container>
    );
};

export default Artists;