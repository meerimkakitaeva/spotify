import React from 'react';
import {CssBaseline} from "@mui/material";
import NavigationToolbar from "./components/Toolbar/NavigationToolbar";
import {Route, Routes} from "react-router";
import Artists from "./features/artists/Artists";
import Albums from "./features/albums/Albums";
import Tracks from "./features/tracks/Tracks";
import Register from "./features/users/Register";
import Login from "./features/users/Login";
import TrackHistory from "./features/trackHistory/trackHistory";

const App = () => {
    return (
        <>
            <CssBaseline/>
            <NavigationToolbar/>
            <Routes>
                <Route path="/" element={<Artists/>}/>
                <Route path="/albums/:artistId" element={<Albums/>}/>
                <Route path="/tracks/:albumId" element={<Tracks/>}/>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/track_history" element={<TrackHistory/>} />
            </Routes>
        </>
    );
};

export default App;