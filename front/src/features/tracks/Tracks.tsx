import React, {useEffect} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import CircularProgress from '@mui/material/CircularProgress';
import {useParams} from "react-router";
import {selectTracks, selectTracksLoading} from "./tracksSlice";
import {fetchTracks} from "./tracksThunk";
import TrackItem from "./components/TrackItem";
import {selectArtistName} from "../albums/albumsSlice";

const Tracks = () => {
    const { albumId } = useParams() as { albumId: string };

    const dispatch = useAppDispatch();
    const items = useAppSelector(selectTracks);
    const fetchLoading = useAppSelector(selectTracksLoading);
    const artistName = useAppSelector(selectArtistName);

    let tracks: React.ReactNode = <CircularProgress />;

    if (!fetchLoading) {

        const newTracks = [...items];
        tracks = newTracks.map((item) => (
            <TrackItem
                _id={item._id}
                name={item.name}
                album={item.album}
                duration={item.duration}
                trackNumber={item.trackNumber}
            />
        ));
    }

    useEffect(() => {
        dispatch(fetchTracks(albumId));
    }, [dispatch, albumId]);

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{mb:3, mt: 2}} textAlign="center">
                        Artist : {artistName}
                    </Typography>
                    <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center"}}>
                        {tracks}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Tracks;