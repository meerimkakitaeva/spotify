import React from 'react';
import {CssBaseline} from "@mui/material";
import NavigationToolbar from "./components/Toolbar/NavigationToolbar";
import {Route, Routes} from "react-router";
import Artists from "./features/artists/Artists";
import Albums from "./features/albums/Albums";
import Tracks from "./features/tracks/Tracks";

const App = () => {
    return (
        <>
            <CssBaseline/>
            <NavigationToolbar/>
            <Routes>
                <Route path="/" element={<Artists/>}/>
                <Route path="/albums/:artistId" element={<Albums/>}/>
                <Route path="/tracks/:albumId" element={<Tracks/>}/>
            </Routes>
        </>
    );
};

export default App;