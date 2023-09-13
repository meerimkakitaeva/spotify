import React from 'react';
import {CssBaseline} from "@mui/material";
import NavigationToolbar from "./components/Toolbar/NavigationToolbar";
import {Route, Routes} from "react-router";
import Artists from "./features/artists/Artists";

const App = () => {
    return (
        <>
            <CssBaseline/>
            <NavigationToolbar/>
            <Routes>
                <Route path="/" element={<Artists />} />
            </Routes>
        </>
    );
};

export default App;