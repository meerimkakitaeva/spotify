import React, { useState } from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {Alert, Avatar, Box, Button, Container, Grid, Link, TextField, Typography} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {LoginMutation} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {login} from "./usersThunk";
import {selectLoginError} from "./usersSlice";

const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const error = useAppSelector(selectLoginError);

    const [state, setState] = useState<LoginMutation>({
        username: '',
        password: '',
    });

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    };

    const submitFormHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await dispatch(login(state)).unwrap();
            navigate('/');
        } catch {

        }
    };

    {error && (
        <Alert
            severity="error"
            sx={{mt: 3, width: '100%'}}
        >
            {error.error}
        </Alert>
    )}

    return (
        <Container component="main" maxWidth="xs">
            <Box
                style={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOpenIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <Box component="form" onSubmit={submitFormHandler} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                name="username"
                                autoComplete="current-username"
                                value={state.username}
                                onChange={inputChangeHandler}
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={state.password}
                                onChange={inputChangeHandler}
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/register" variant="body2">
                                Or sign up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;