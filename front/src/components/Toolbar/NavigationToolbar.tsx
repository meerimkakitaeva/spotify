import React from 'react';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';

const Link = styled(NavLink)({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: 'inherit'
    },
});

const NavigationToolbar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 5}}>
            <Toolbar >
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    <Link to="/">Albums</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationToolbar;