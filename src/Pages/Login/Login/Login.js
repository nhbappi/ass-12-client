import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';




const Login = () => {
        const [loginData, setLoginData] = useState({});
        const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

        const location = useLocation();
        const history = useHistory();
        const handleOnChange = (e) => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            setLoginData(newLoginData);
        };
        const handleLoginSubmit = (e) => {
            loginUser(loginData.email, loginData.password, location, history);
            e.preventDefault();
        };
        const handleGoogleSignIn = () => {
            signInWithGoogle(location, history);
        };
    return (
        <Container sx={{my: 10}}>
            <Grid container spacing={3}>
                <Grid item xs={0} sm={3} md={3} >
                </Grid>
                <Grid style={{textAlign: 'center', margin: '0 auto'}} item xs={12} sm={6} md={6} >
                    <Typography variant="h5" gutterBottom style={{textAlign: 'center'}}>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button
                            sx={{ width: "75%", m: 1 }}
                            type="submit"
                            variant="contained"
                        >
                            Login
                        </Button>
                        <NavLink
                            style={{ textDecoration: "none" }}
                            to="/register"
                        >
                            <Button variant="text">
                                New User? Please Register
                            </Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && (
                            <Alert severity="success">
                                Login successfully!
                            </Alert>
                        )}
                        {authError && (
                            <Alert severity="error">{authError}</Alert>
                        )}
                    </form>
                    <hr />
                    <Button
                        sx={{m: 1 }}
                        type="submit"
                        variant="contained"
                        style={{textAlign: 'center', margin: '0 auto', justifyContent: 'center'}}
                        onClick={handleGoogleSignIn}
                    >
                        Google Sign In
                    </Button>
                </Grid>
                <Grid item xs={0} sm={3} md={3} >
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;