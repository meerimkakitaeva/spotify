import React, {useEffect} from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import CircularProgress from '@mui/material/CircularProgress';
import {selectFetchHistoryLoading, selectHistoryTracks} from "../tracks/tracksSlice";
import TrackHistoryItem from "./components/TrackHistoryItem";
import {fetchHistory} from "../tracks/tracksThunk";
import {selectUser} from "../users/usersSlice";

const TrackHistory = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectHistoryTracks);
    const fetchLoading = useAppSelector(selectFetchHistoryLoading);
    const user = useAppSelector(selectUser);
    const token = user?.token;

    let history: React.ReactNode = <CircularProgress />;

    if (!fetchLoading) {
        const newHistory = [...items];
        history = newHistory.map((item) => (
            <TrackHistoryItem
                _id={item._id}
                key={item._id}
                name={item.track.name}
                datetime={item.datetime}
            />
        ));
    }

    useEffect(() => {
        dispatch(fetchHistory(token!));
    }, [dispatch]);

    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" sx={{mb:3, mt: 2}} textAlign="center">
                        History
                    </Typography>
                    <div style={{display: "flex",flexWrap: "wrap", flexDirection: "row", justifyContent: "center"}}>
                        {history}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TrackHistory;