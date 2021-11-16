import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';




const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { user, registerUser, isLoading, authError, signInWithGoogle } =
         useAuth();

    const handleOnBlur = (e) => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = { ...loginData };
         newLoginData[field] = value;
         setLoginData(newLoginData);
    };
    
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };

    const handleLoginSubmit = (e) => {
         if (loginData.password !== loginData.password2) {
             alert("Your password did not match");
             return;
         }
         registerUser(loginData.email, loginData.password, loginData.name, history);
         e.preventDefault();
     };
     return (
         <Container sx={{my: 10}}>
             <Grid container spacing={2}>
                <Grid item xs={0} sm={3} md={3} >
                </Grid>
                 <Grid style={{textAlign: 'center', margin: '0 auto'}} item sx={{ mt: 8 }} xs={12} sm={6} md={6}>
                     <Typography variant="h5" gutterBottom>
                         Register
                     </Typography>
                     {!isLoading && (
                         <form onSubmit={handleLoginSubmit}>
                             <TextField
                                 sx={{ width: "75%", m: 1 }}
                                 id="standard-basic"
                                 label="Your Name"
                                 name="name"
                                 onBlur={handleOnBlur}
                                 variant="standard"
                             />
                             <TextField
                                 sx={{ width: "75%", m: 1 }}
                                 id="standard-basic"
                                 label="Your Email"
                                 name="email"
                                 type="email"
                                 onBlur={handleOnBlur}
                                 variant="standard"
                             />
                             <TextField
                                 sx={{ width: "75%", m: 1 }}
                                 id="standard-basic"
                                 label="Your Password"
                                 type="password"
                                 name="password"
                                 onBlur={handleOnBlur}
                                 variant="standard"
                             />
                             <TextField
                                 sx={{ width: "75%", m: 1 }}
                                 id="standard-basic"
                                 label="ReType Your Password"
                                 type="password"
                                 name="password2"
                                 onBlur={handleOnBlur}
                                 variant="standard"
                             />

                             <Button
                                 sx={{ width: "75%", m: 1 }}
                                 type="submit"
                                 variant="contained"
                             >
                                 Register
                             </Button>
                             <NavLink
                                 style={{ textDecoration: "none" }}
                                 to="/login"
                             >
                                 <Button variant="text">
                                     Already Registered? Please Login
                                 </Button>
                             </NavLink>
                         </form>
                     )}
                     {isLoading && <CircularProgress />}
                     {user?.email && (
                         <Alert severity="success">
                             User Created successfully!
                         </Alert>
                     )}
                     {authError && <Alert severity="error">{authError}</Alert>}
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

export default Register;