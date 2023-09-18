import React from 'react';
import {AppBar, styled, Toolbar, Typography} from '@mui/material';
import { Link as NavLink } from 'react-router-dom';
import {useAppSelector} from "../../app/hooks";
import UserMenu from "./UserMenu";
import AnonymousMenu from "./AnonymousMenu";
import {selectUser} from "../../features/users/usersSlice";

const Link = styled(NavLink)({
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
        color: 'inherit'
    },
});

const NavigationToolbar = () => {
    const user = useAppSelector(selectUser);

    return (
        <AppBar position="sticky" sx={{mb: 5}}>
            <Toolbar >
                <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                    <Link to="/">Artists</Link>
                    {user ? <Link to="/track_history" style={{marginLeft: "10px"}}>History</Link> : ''}
                </Typography>

                {user ? <UserMenu user={user}/> : <AnonymousMenu />}
            </Toolbar>
        </AppBar>
    );
};

export default NavigationToolbar;