import React from 'react';
import {CssBaseline} from "@mui/material";
import NavigationToolbar from "./components/Toolbar/NavigationToolbar";
import {Routes} from "react-router";

const App = () => {
    return (
        <>
            <CssBaseline/>
            <NavigationToolbar/>
            <Routes>

            </Routes>
        </>
    );
};

export default App;